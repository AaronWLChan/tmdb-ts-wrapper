import { TVShowListResult } from ".";
import { Pageable, Paginated, Translatable } from "../../util";

export interface TVAiringToday extends Paginated{
    results?: TVShowListResult[]
}

export interface TVAiringTodayQueryString extends Pageable, Translatable {}