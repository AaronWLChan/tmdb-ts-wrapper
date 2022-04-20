import { Pageable, Paginated, Translatable } from "../../util";
import { TVShowListResult } from "../TV";

export interface SearchTV extends Paginated {
    results?: TVShowListResult[]
}

export interface SearchTVQueryString extends Pageable, Translatable{
    query: string,
    include_adult?: boolean,
    first_air_date_year?: number
}