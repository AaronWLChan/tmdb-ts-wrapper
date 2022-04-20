import { Translatable } from "../../util"

export interface WatchProvidersMovie {
    results?: WatchProvidersMovieResult[]
}

export interface WatchProvidersMovieResult {
    display_priority?: number,
    logo_path?: string,
    provider_name?: string,
    provider_id?: number
}

export interface WatchProvidersMovieQueryString extends Translatable{
    watch_region?: string,
}