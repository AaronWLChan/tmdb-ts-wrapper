import { Language } from "../../tmdb/Language";
import { Identifiable } from "../../util";
import { Collection } from "../Collections";
import { Genre } from "../Genres";

export interface Movie extends Identifiable {
    adult?: boolean,
    backdrop_path?: string | null,
    belongs_to_collection?: Collection | null,
    budget?: number,
    genres?: Genre[],
    homepage?: string | null,
    imdb_id?: string | null,
    original_language?: string,
    original_title?: string,
    overview?: string | null,
    popularity?: number,
    poster_path?: string | null,
    production_companies?: ProductionCompany[]
    production_countries?: ProductionCountry[],
    release_date?: string,
    revenue?: number,
    runtime?: number | null,
    spoken_languages?: SpokenLanguage[],
    status?: string,
    tagline?: string | null,
    title?: string,
    video?: boolean,
    vote_average?: number,
    vote_count?: number
}

export interface MovieListResult extends Identifiable {
    poster_path?: string | null,
    adult?: boolean,
    overview?: string,
    release_date?: string,
    genre_ids?: number[],
    original_title?: string,
    original_language?: string,
    title?: string,
    backdrop_path?: string | null,
    popularity?: number,
    vote_count?: number
    video?: boolean,
    vote_average?: number,
}

export interface MovieListResultWRatingObject extends MovieListResult {
    rating?: number
}

export interface SpokenLanguage {
    iso_639_1?: string,
    name?: string,
}

export interface ProductionCompany extends Identifiable {
    name?: string,
    logo_path?: string | null,
    origin_country?: string
}

export interface ProductionCountry {
    iso_3166_1?: string,
    name?: string
}

export * from './MovieAccountStates'
export * from './MovieAlternativeTitles'
export * from './MovieChanges'
export * from './MovieCredits'
export * from './MovieExternalIds'
export * from './MovieImages'
export * from './MovieKeywords'
export * from './MovieLists'
export * from './MovieRecommendations'
export * from './MovieReleaseDates'
export * from './MovieReviews'
export * from './SimilarMovies'
export * from './MovieTranslations'
export * from './MovieVideos'
export * from './MovieWatchProviders'
export * from './RateMovie'
export * from './DeleteMovie'
export * from './LatestMovie'
export * from './NowPlaying'
export * from './PopularMovies'
export * from './TopRatedMovies'
export * from './UpcomingMovies'