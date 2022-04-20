import { Identifiable } from "../../util";

export interface PersonTVCredits extends Identifiable {
    cast?: TVCastCredit[],
    crew?: TVCrewCredit[]
}

export interface TVCastCredit extends Identifiable {
    credit_id?: string,
    original_name?: string,
    genre_ids?: number[],
    character?: string,
    name?: string,
    poster_path?: string | null
    vote_count?: number,
    vote_average?: number,
    popularity?: number,
    episode_count?: number,
    original_language?: string,
    first_air_date?: string,
    backdrop_path?: string | null,
    overview?: string,
    origin_country?: string[]
}

export interface TVCrewCredit extends Identifiable {
    department?: string,
    original_language?: string,
    episode_count?: number,
    job?: string,
    overview?: string,
    origin_country?: string[]
    original_name?: string,
    genre_ids?: number[],
    name?: string,
    first_air_date?: string,
    backdrop_path?: string | null,
    popularity?: number,
    vote_count?: number,
    vote_average?: number,
    poster_path?: string | null,
    credit_id?: string
}