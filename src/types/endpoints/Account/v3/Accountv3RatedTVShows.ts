import { Pageable, Paginated, Translatable } from "../../../util";
import { TVShowListResultWRatingObject } from "../../TV";

export interface Accountv3RatedTVShows extends Paginated {
    results?: TVShowListResultWRatingObject[]
}

export interface Accountv3RatedTVShowsQueryString extends Pageable, Translatable {
    session_id: string,
    sort_by?: "created_at.asc" | "created_at.desc",
}