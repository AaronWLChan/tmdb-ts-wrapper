import { Identifiable } from "../../util";
import { TVEpisodeListResultWithOrder } from "../TV Episodes";

export interface TVEpisodeGroup extends Identifiable {
    description?: string,
    episode_count?: number,
    group_count?: number,
    groups?: TVEpisodeGroupGroup[]
    name?: string,
    network?: TVEpisodeGroupNetwork | null
    type?: TVEpisodeGroupType
}

export interface TVEpisodeGroupGroup extends Identifiable {
    name?: string,
    order?: number
    episodes?: TVEpisodeListResultWithOrder[],
    locked?: boolean
}

export interface TVEpisodeGroupNetwork extends Identifiable{
    logo_path?: string | null,
    name?: string,
    origin_country?: string
}

export enum TVEpisodeGroupType {
    "ORIGINAL_AIR_DATE" = 1,
    "ABSOLUTE",
    "DVD",
    "DIGITAL",
    "STORY_ARC",
    "PRODUCTION",
    "TV"
}