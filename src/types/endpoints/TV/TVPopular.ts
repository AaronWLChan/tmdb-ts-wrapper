import { TVShowListResult } from ".";
import { Pageable, Paginated, Translatable } from "../../util";

export interface TVPopular extends Paginated{
    results?: TVShowListResult[]
}

export interface TVPopularQueryString extends Pageable, Translatable{}