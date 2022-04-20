import { Pageable, Paginated, Translatable } from "../../../util";
import { MovieListResultWRatingObject } from "../../Movies";

export interface Accountv3RatedMovies extends Paginated {
    results?: MovieListResultWRatingObject[]
}

export interface Accountv3RatedMoviesQueryString extends Pageable, Translatable {
    session_id: string,
    sort_by?: "created_at.asc" | "created_at.desc",
}