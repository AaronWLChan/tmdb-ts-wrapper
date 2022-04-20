import { TVShowListResult } from "../../TV";
import { Pageable, Paginated } from "../../../util";

export interface Accountv4TVShowWatchlist extends Paginated {
    results?: TVShowListResult[]
}

export interface Accountv4TVShowWatchlistQueryString extends Pageable  {
    sort_by?: "first_air_date.asc" | "first_air_date.desc" | "name.asc" | "name.desc" | "vote_average.asc" | "vote_average.desc",
}