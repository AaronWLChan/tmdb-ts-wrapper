import { Gender } from "../../tmdb";
import { Identifiable } from "../../util";

export interface MovieCredits extends Identifiable {
    cast?: CastMember[],
    crew?: CrewMember[]
}

export interface CastMember extends Identifiable {
    adult?: string,
    gender?: Gender | null,
    known_for_department?: string,
    name?: string,
    original_name?: string,
    popularity?: number,
    profile_path?: string | null,
    cast_id?: number,
    character?: string,
    credit_id?: string,
    order?: number
}

export interface CrewMember extends Identifiable {
    adult?: string,
    gender?: Gender | null,
    known_for_department?: string,
    name?: string,
    original_name?: string,
    popularity?: number,
    profile_path?: string | null,
    credit_id?: string,
    department?: string,
    job?: number
}

