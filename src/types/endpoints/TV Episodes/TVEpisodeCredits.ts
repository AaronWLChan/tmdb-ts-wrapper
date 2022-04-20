import { TVEpisodeGuestStar } from ".";
import { Gender } from "../../tmdb";
import { Identifiable } from "../../util";

export interface TVEpisodeCredits extends Identifiable {
    cast?: TVEpisodeCreditsCrewMember[],
    crew?: TVEpisodeCreditsCrewMember[],
    guest_stars?: TVEpisodeGuestStar[]
}

export interface TVEpisodeCreditsCastMember extends Identifiable {
    adult?: boolean,
    gender?: Gender | null,
    known_for_department?: string,
    name?: string,
    original_name?: string,
    popularity?: number,
    profile_path?: string | null,
    character?: string,
    credit_id?: string,
    order?: number,
}

export interface TVEpisodeCreditsCrewMember extends Identifiable {
    department?: string,
    job?: string,
    credit_id?: string,
    adult?: boolean,
    gender: Gender | null,
    known_for_department?: string,
    name?: string,
    original_name?: string,
    popularity?: number,
    profile_path?: string | null
}

export interface TVEpisodeCreditsGuestStar extends Identifiable {
    character_name?:  string,
    credit_id?: string,
    order?: number,
    adult?: boolean,
    gender: Gender | null,
    known_for_department?: string,
    name?: string,
    original_name?: string,
    popularity?: number,
    profile_path?: string | null
}