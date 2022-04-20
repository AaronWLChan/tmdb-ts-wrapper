import { Gender } from "../../tmdb";
import { Identifiable } from "../../util";
import { Genre } from "../Genres";

export interface TVShow extends Identifiable {
    backdrop_path?: string | null,
    created_by?: TVShowCreatedBy,
    episode_run_time?: number[],
    first_air_date?: string,
    genres?: Genre[],
    homepage?: string,
    in_production?: boolean,
    languages?: string[],
    last_air_date?: string,
    last_episode_to_air?: TVEpisode,
    name?: string,
    next_episode_to_air?: null,
    networks?: TVNetwork[],
    number_of_episodes?: number,
    number_of_seasons?: number,
    origin_country?: string[],
    original_language?: string,
    original_name?: string,
    overview?: string,
    popularity?: number,
    poster_path?: string | null,
    production_companies?: TVProductionCompany[],
    production_countries?: TVProductionCountry[],
    seasons?: TVSeason[],
    spoken_languages?: TVSpokenLanguage[],
    status?: string,
    tagline?: string,
    type?: string,
    vote_average?: number,
    vote_count?: number
}

export interface TVShowListResult extends Identifiable {
    poster_path?: string | null,
    popularity?: number,
    backdrop_path?: string | null,
    vote_average?: number,
    overview?: string,
    first_air_date?: string,
    origin_country?: string[],
    genre_ids?: Genre[],
    original_language?: string,
    vote_count?: number
    name?: string,
    original_name?: string,
}

export interface TVShowListResultWRatingObject extends TVShowListResult {
    rating?: number,
}

interface TVShowCreatedBy extends Identifiable {
    credit_id?: string,
    name?: string,
    gender?: Gender,
    profile_path?: string | null
}

interface TVEpisode extends Identifiable {
    air_date?: string,
    episode_number?: number,
    name?: string,
    overview?: string,
    production_code?: string,
    season_number?: number,
    still_path?: string | null,
    vote_average?: number,
    vote_count?: number,
}

interface TVNetwork extends Identifiable{
    name?: string,
    logo_path?: string | null,
    origin_country?: string,
}

interface TVProductionCompany extends Identifiable{
    logo_path?: string | null,
    name?: string,
    origin_country?: string,
}

interface TVProductionCountry{
    iso_3166_1?: string,
    name?: string,
}

interface TVSeason extends Identifiable{
    air_date?: string,
    episode_count?: number,
    name?: string,
    overview?: string,
    poster_path?: string,
    season_number?: number
}

interface TVSpokenLanguage {
    english_name?: string,
    iso_639_1?: string,
    name?: string
}

export * from './TVAccountStates'
export * from './TVAggregrateCredits'
export * from './TVAlternativeTitles'
export * from './TVChanges'
export * from './TVContentRatings'
export * from './TVCredits'
export * from './TVEpisodeGroups'
export * from './TVExternalIds'
export * from './TVImages'
export * from './TVKeywords'
export * from './TVRecommendations'
export * from './TVReviews'
export * from './TVScreenedTheatrically'
export * from './SimilarTVShows'
export * from './TVTranslations'
export * from './TVVideos'
export * from './TVWatchProviders'
export * from './RateTVShow'
export * from './DeleteTVRating'
export * from './LatestTVShow'
export * from './TVAiringToday'
export * from './TVOnAir'
export * from './TVPopular'
export * from './TVTopRated'