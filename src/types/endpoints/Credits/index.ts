import { Identifiable } from "../../util";
import { TVEpisodeListResult } from "../TV Episodes";

export interface Credit {
    credit_type?: string,
    department?: string,
    job?: string,
    media?: CreditMedia,
    person?: CreditPerson

}

export interface CreditMedia extends Identifiable {
    name?: string,
    original_name?: string,
    character?: string,
    episodes?: TVEpisodeListResult[],
    seasons?: CreditMediaSeason[]
}


export interface CreditMediaSeason extends Identifiable {
    air_date?: string,
    episode_count?: number,
    name?: string,
    overview?: string,
    poster_path?: string | null,
    season_number?: number
    show_id?: number
}

export interface CreditPerson extends Identifiable {
    name?: string
}