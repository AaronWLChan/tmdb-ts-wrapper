import { Gender } from "../../tmdb";
import { Identifiable } from "../../util";

export interface TVCredits extends Identifiable {
    cast?: TVCreditsCastMember[],
    crew?: TVCreditsCrewMember[]
}

export interface TVCreditsCastMember extends Identifiable {
    adult?: boolean,
    gender?: Gender | null,
    known_for_department?: string,
    name?: string,
    original_name?: string,
    popularity?: number,
    profile_path?: string | null
    character?: string,
    credit_id?: string,
    order?: number
}

export interface TVCreditsCrewMember extends Identifiable {
    adult?: boolean,
    gender?: Gender | null,
    known_for_department?: string,
    name?: string,
    original_name?: string,
    popularity?: number,
    profile_path?: string | null
    credit_id?: string,
    department?: string,
    job?: string,
}