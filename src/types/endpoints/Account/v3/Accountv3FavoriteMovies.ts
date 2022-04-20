import { Pageable, Paginated, Translatable } from "../../../util";
import { MovieListResult } from "../../Movies";

export interface Accountv3FavoriteMovies extends Paginated {
    results?: MovieListResult[]
}

export interface Accountv3FavoriteMoviesQueryString extends Translatable, Pageable {
    session_id: string,
    sort_by?: "created_at.asc" | "created_at.desc",
}