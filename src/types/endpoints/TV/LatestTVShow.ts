import { Identifiable } from "../../util";

export interface LatestTVShow extends Identifiable {
    backdrop_path?: string | null,

    //No information on this field on TMDB
    created_by?: any[],
    episode_run_time?: number[],
    first_air_date?: string,
    genres?: LatestTVShowGenre[],
    homepage?: string,
    in_production?: boolean,
    languages?: string[],
    last_air_date?: string,
    name?: string,
    networks?: LatestTVShowNetwork[],
    number_of_episodes?: number,
    number_of_seasons?: number,
    origin_country?: string[],
    original_language?: string,
    original_name?: string,
    overview?: null | string,
    popularity?: number,
    poster_path?: string | null,

    //No information on this field on TMDB
    production_companies?: any[],
    seasons?: LatestTVShowSeason[],
    status?: string,
    type?: string,
    vote_average?: number,
    vote_count?: number
}

export interface LatestTVShowGenre extends Identifiable {
    name?: string
}

export interface LatestTVShowNetwork extends Identifiable {
    name?: string
}

export interface LatestTVShowSeason extends Identifiable {
    air_date?: string,
    episode_count?: number,
    poster_path?: string | null,
    season_number?: number
}