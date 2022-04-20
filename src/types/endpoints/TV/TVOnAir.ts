import { TVShowListResult } from ".";
import { Pageable, Paginated, Translatable } from "../../util";

export interface TVOnAir extends Paginated{
    results?: TVShowListResult[]
}

export interface TVOnAirQueryString extends Pageable, Translatable {}