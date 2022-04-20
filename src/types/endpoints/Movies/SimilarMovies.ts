import { MovieListResult } from ".";
import { Pageable, Paginated, Translatable } from "../../util";

export interface SimilarMovies extends Paginated {
    results?: MovieListResult[]
}

export interface SimilarMoviesQueryString extends Pageable, Translatable {}
