import { TVShowListResult } from ".";
import { Pageable, Paginated, Translatable } from "../../util";

export interface TVTopRated extends Paginated{
    results?: TVShowListResult[]
}

export interface TVTopRatedQueryString extends Pageable, Translatable{}