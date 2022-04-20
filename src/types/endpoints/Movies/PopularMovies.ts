import { MovieListResult } from ".";
import { Pageable, Paginated, Translatable } from "../../util";

export interface PopularMovies extends Paginated {
    results?: MovieListResult[]
}

export interface PopularMoviesQueryString extends Pageable, Translatable{
    //ISO_3166_1
    region?: string,
}