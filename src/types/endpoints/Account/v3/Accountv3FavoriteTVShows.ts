import { TVShowListResult } from "../../TV";
import { Pageable, Paginated, Translatable } from "../../../util";

export interface Accountv3FavoriteTVShows extends Paginated {
    results?: TVShowListResult[]
}

export interface Accountv3FavoriteTVShowsQueryString extends Translatable, Pageable {
    session_id: string,
    sort_by?: "created_at.asc" | "created_at.desc",
}