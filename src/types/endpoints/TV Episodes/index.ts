import { Identifiable } from "../../util";

export interface TVEpisode extends Identifiable {
    air_date?: string,
    crew?: TVEpisodeCrewMember[],
    episode_number?: number,
    guest_stars?: TVEpisodeGuestStar[],
    name?: string,
    overview?: string,
    production_code?: string | null,
    season_number?: number,
    still_path?: string | null,
    vote_average?: number,
    vote_count?: number
}

export interface TVEpisodeListResult extends Identifiable {
    air_date?: string,
    episode_number?: number,
    name?: string,
    overview?: string,
    production_code?: string | null,
    season_number?: number,
    show_id?: number,
    still_path?: string | null,
    vote_average?: number,
    vote_count?: number,
}

export interface TVEpisodeListResultWithRating extends TVEpisodeListResult {
    rating?: number
}

export interface TVEpisodeListResultWithOrder extends TVEpisodeListResult {
    order?: number
}

export interface TVEpisodeCrewMember extends Identifiable{
    credit_id?: string,
    name?: string,
    department?: string,
    job?: string,
    profile_path?: string | null
}

export interface TVEpisodeGuestStar extends Identifiable{
    name?: string,
    credit_id?: string,
    character?: string,
    order?: number,
    profile_path?: string | null
}

export * from './TVEpisodeAccountStates'
export * from './TVEpisodeChanges'
export * from './TVEpisodeCredits'
export * from './TVEpisodeExternalIds'
export * from './TVEpisodeImages'
export * from './TVEpisodeTranslations'
export * from './RateTVEpisode'
export * from './DeleteTVEpisodeRating'
export * from './TVEpisodeVideos'