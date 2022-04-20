import { TVShowListResult } from "../../TV";
import { Pageable, Paginated, Translatable } from "../../../util";

export interface Accountv3TVWatchlist extends Paginated {
    results?: TVShowListResult[]
}

export interface Accountv3TVWatchlistQueryString extends Pageable, Translatable {
    session_id: string,
    sort_by?: "created_at.asc" | "created_at.desc",
}