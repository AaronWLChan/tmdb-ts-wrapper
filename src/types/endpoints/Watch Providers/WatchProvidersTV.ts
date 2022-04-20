import { Translatable } from "../../util"

export interface WatchProvidersTV {
    results?: WatchProvidersTVResult[]
}

export interface WatchProvidersTVResult {
    display_priority?: number,
    logo_path?: string,
    provider_name?: string,
    provider_id?: number
}

export interface WatchProvidersTVQueryString extends Translatable{
    watch_region?: string,
}