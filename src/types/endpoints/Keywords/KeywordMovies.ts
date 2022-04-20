import { Identifiable, Paginated, Translatable } from "../../util";
import { MovieListResult } from "../Movies";

export interface KeywordMoviesQueryString extends Translatable{
    include_adult?: boolean
}

export interface KeywordMovies extends Identifiable, Paginated {
    results?: MovieListResult[]
}