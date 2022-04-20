import { Pageable, Paginated } from "../../../util";
import { MovieListResult } from "../../Movies";

export interface Accountv4MovieWatchlist extends Paginated {
    results?: MovieListResult[]
}

export interface Accountv4MovieWatchlistQueryString extends Pageable  {
    sort_by?: "created_at.asc" | "created_at.desc" | "release_date.asc" | "release_date.desc" | "title.asc" | "title.desc" | "vote_average.asc" | "vote_average.desc",
}