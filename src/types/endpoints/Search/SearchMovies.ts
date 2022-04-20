import { Pageable, Paginated, Translatable } from "../../util";
import { MovieListResult } from "../Movies";

export interface SearchMovies extends Paginated{
    results?: MovieListResult[]
}

export interface SearchMoviesQueryString extends Pageable, Translatable {
    query: string,
    include_adult?: boolean,
    region?: string,
    year?: number,
    primary_release_year?: number
}