import { Pageable, Paginated } from "../../../util";
import { MovieListResultWRatingObject } from "../../Movies";

export interface Accountv4RatedMovies extends Paginated {
    results?: MovieListResultWRatingObject[]
}

export interface Accountv4RatedMoviesQueryString extends Pageable  {
    sort_by?: "created_at.asc" | "created_at.desc" | "release_date.asc" | "release_date.desc" | "title.asc" | "title.desc" | "vote_average.asc" | "vote_average.desc"
}