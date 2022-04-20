import { Identifiable } from "../../util";
import { MovieCastCredit, MovieCrewCredit } from "./PersonMovieCredits";
import { TVCastCredit, TVCrewCredit } from "./PersonTVCredits";

export interface PersonCombinedCredits extends Identifiable {
    cast?: CombinedCastCredit[],
    crew?: CombinedCrewCredit[]
}

export interface CombinedCastCredit extends MovieCastCredit, TVCastCredit {
    media_type?: string
}

export interface CombinedCrewCredit extends MovieCrewCredit, TVCrewCredit {
    media_type?: string
}