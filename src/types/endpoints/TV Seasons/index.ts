import { Gender } from "../../tmdb";
import { Identifiable } from "../../util";

export interface TVSeason extends Identifiable {
    _id?: string,
    air_date?: string,
    episodes?: TVSeasonEpisode[],
    name?: string,
    overview?: string,
    poster_path?: string | null,
    season_number?: number
}

export interface TVSeasonListResult extends Identifiable {
    _id?: string,
    air_date?: string,
    name?: string,
    overview?: string,
    poster_path?: string | null,
    season_number?: number,
    show_id?: number
}

interface TVSeasonEpisode extends Identifiable {
    air_date?: string,
    episode_number?: number,
    crew?: TVSeasonEpisodeCrewMember[],
    guest_stars?: TVSeasonEpisodeGuestStar[],
    name?: string,
    overview?: string,
    production_code?: string,
    season_number?: number,
    still_path?: string,
    vote_average?: number,
    vote_count?: number,
}

interface TVSeasonEpisodeCrewMember extends Identifiable{
    department?: string,
    job?: string,
    credit_id?: string,
    adult?: boolean | null,
    gender?: Gender,
    known_for_department?: string,
    name?: string,
    original_name?: string,
    popularity?: number,
    profile_pather?: string | null
}

interface TVSeasonEpisodeGuestStar extends Identifiable{
    credit_id?: string,
    order?: number,
    character?: string,
    adult?: boolean,
    gender?: Gender | null,
    known_for_department?: string,
    name?: string,
    original_name?: string,
    popularity?: number,
    profile_pather?: string | null
}

export * from './TVSeasonAccountStates'
export * from './TVSeasonAggregrateCredits'
export * from './TVSeasonChanges'
export * from './TVSeasonCredits'
export * from './TVSeasonExternalIds'
export * from './TVSeasonImages'
export * from './TVSeasonTranslations'
export * from './TVSeasonVideos'