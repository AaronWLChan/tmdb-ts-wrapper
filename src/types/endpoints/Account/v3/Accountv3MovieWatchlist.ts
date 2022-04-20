import { Pageable, Paginated, Translatable } from "../../../util";
import { MovieListResult } from "../../Movies";

export interface Accountv3MovieWatchlist extends Paginated {
    results?: MovieListResult[]
}

export interface Accountv3MovieWatchlistQueryString extends Pageable, Translatable {
    session_id: string,
    sort_by?: "created_at.asc" | "created_at.desc",
}