import { TVShowListResultWRatingObject } from "../../TV";
import { Pageable, Paginated } from "../../../util";

export interface Accountv4RatedTVShows extends Paginated {
    results?: TVShowListResultWRatingObject[]
}

export interface Accountv4RatedTVShowsQueryString extends Pageable  {
    sort_by?: "first_air_date.asc" | "first_air_date.desc" | "name.asc" | "name.desc" | "vote_average.asc" | "vote_average.desc",
}