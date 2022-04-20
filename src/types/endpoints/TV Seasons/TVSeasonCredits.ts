import { Gender } from "../../tmdb";
import { Identifiable } from "../../util";

export interface TVSeasonCredits extends Identifiable {
    cast?: TVSeasonCreditsCastMember[],
    crew?: TVSeasonCreditsCrewMember[],
}

interface TVSeasonCreditsCastMember extends Identifiable {
    adult?: boolean,
    gender?: Gender | null,
    known_for_department?: string,
    name?: string,
    original_name?: string,
    popularity?: number,
    profile_path?: string | null,
    character?: string,
    credit_id?: string,
    order?: number
}

interface TVSeasonCreditsCrewMember extends Identifiable {
    adult?: boolean,
    gender?: Gender | null,
    known_for_department?: string,
    name?: string,
    original_name?: string,
    popularity?: number,
    profile_path?: string | null,
    character?: string,
    credit_id?: string,
    department?: string,
    job?: string,
}