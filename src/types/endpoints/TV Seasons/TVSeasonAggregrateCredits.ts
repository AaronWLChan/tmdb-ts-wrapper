import { Gender } from "../../tmdb";
import { Identifiable } from "../../util";

export interface TVSeasonAggregrateCredits extends Identifiable {
    cast?: TVSeasonAggregrateCreditsCastMember[]
    crew?: TVSeasonAggregrateCreditsCrewMember[],
}

interface TVSeasonAggregrateCreditsCastMember extends Identifiable  {
    adult?: boolean,
    gender: Gender | null,
    known_for_department?: string,
    name?: string,
    original_name?: string,
    popularity?: number,
    profile_path?: string | null,
    roles?: TVSeasonAggregrateCreditsCastMemberRole[]
    total_episode_count?: number,
    order?: number
}

interface TVSeasonAggregrateCreditsCastMemberRole {
    credit_id?: string,
    character?: string,
    episode_count?: number
}

interface TVSeasonAggregrateCreditsCrewMember extends Identifiable  {
    adult?: boolean,
    gender: Gender | null,
    known_for_department?: string,
    name?: string,
    original_name?: string,
    popularity?: number,
    profile_path?: string | null,
    jobs?: TVSeasonAggregrateCreditsCrewMemberJob[]
    department?: string,
    total_episode_count?: number,

}

interface TVSeasonAggregrateCreditsCrewMemberJob{
    credit_id?: string,
    job?: string,
    episode_count?: number
}
