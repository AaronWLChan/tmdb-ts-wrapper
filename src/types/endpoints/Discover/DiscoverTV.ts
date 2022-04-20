import { Pageable, Paginated, Translatable } from "../../util"
import { TVShowListResult } from "../TV"

export interface DiscoverTV extends Paginated {
    results?: TVShowListResult[]
}

export interface DiscoverTVQueryString extends Pageable, Translatable {
    sort_by?: DiscoverTVSortOption,
    "air_date.gte"?: string,
    "air_date.lte"?: string,
    "first_air_date.gte"?: string,
    "first_air_date.lte"?: string,
    first_air_date_year?: number,
    timezone?: string,
    "vote_average.gte"?: number,
    "vote_count.gte"?: number,
    with_genres?: string,
    with_networks?: string,
    without_genres?: string,
    "with_runtime.gte"?: number,
    "with_runtime.lte"?: number,
    include_null_first_air_dates?: boolean,
    with_original_language?: string,
    without_keywords?: string,
    screened_theatrically?: boolean,
    with_companies?: string,
    with_keywords?: string,
    with_watch_providers?: string,
    watch_region?: string,
    with_watch_monetization_types?: WatchMonetizationType,
    with_status?: TVStatus,
    with_type?: TVShowType,
    without_companies?: string
}


export enum TVStatus {
    "RETURNING_SERIES" = "0",
    "PLANNED" = "1",
    "IN_PRODUCTION" = "2",
    "ENDED" = "3",
    "CANCELLED" = "4",
    "PILOT" = "5"
}

export enum TVShowType {
    "DOCUMENTARY" = "0",
    "NEWS" = "1",
    "MINISERIES" = "2",
    "REALITY" = "3",
    "SCRIPTED" = "4",
    "TALK_SHOW" = "5",
    "VIDEO" = "6"
}


export type WatchMonetizationType = "flatrate" | "free" | "ads" | "rent" | "buy"

export type DiscoverTVSortOption = "vote_average.desc" | "vote_average.asc" | "first_air_date.desc" | "first_air_date.asc" | "popularity_desc" | "popularity_asc"

