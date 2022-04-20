import { Gender } from "../../tmdb";
import { Identifiable } from "../../util";

export interface TVAggregrateCredits extends Identifiable{
    cast?: TVAggregrateCastMember[],
    crew?: TVAggregrateCrewMember[]
}

export interface TVAggregrateCastMember extends Identifiable {
    adult?: boolean,
    gender?: Gender | null,
    known_for_department?: string,
    name?: string,
    original_name?: string,
    popularity?: number,
    profile_path?: string | null
    roles?: TVAggregrateCastMemberRole[],
    total_episode_count?: number,
    order?: number
}

export interface TVAggregrateCastMemberRole{
    credit_id?: string,
    character?: string,
    episode_count?: number
}

export interface TVAggregrateCrewMember extends Identifiable {
    adult?: boolean,
    gender?: Gender | null,
    known_for_department?: string,
    name?: string,
    original_name?: string,
    popularity?: number,
    profile_path?: string | null
    jobs?: TVAggregrateCrewMemberJob[],
    department?: string,
    total_episode_count?: number,
}

export interface TVAggregrateCrewMemberJob{
    credit_id?: string,
    job?: string,
    episode_count?: number
}