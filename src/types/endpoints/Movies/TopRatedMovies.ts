import { MovieListResult } from ".";
import { Pageable, Paginated, Translatable } from "../../util";

export interface TopRatedMovies extends Paginated {
    results?: MovieListResult[]
}

export interface TopRatedMoviesQueryString extends Pageable, Translatable{
    //ISO_3166_1
    region?: string,
}