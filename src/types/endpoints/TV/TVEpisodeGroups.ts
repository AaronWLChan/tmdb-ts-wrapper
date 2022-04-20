import { Identifiable } from "../../util";

export interface TVEpisodeGroups extends Identifiable {
    results?: TVEpisodeGroupsResult[]
}

export interface TVEpisodeGroupsResult extends Identifiable {
    description?: string,
    episode_count?: number,
    group_count?: number,
    name?: string,
    network?: TVEpisodeGroupsResultNetwork,
    type?: number
}

export interface TVEpisodeGroupsResultNetwork extends Identifiable {
    logo_path?: string,
    name?: string,
    origin_country?: string,
}