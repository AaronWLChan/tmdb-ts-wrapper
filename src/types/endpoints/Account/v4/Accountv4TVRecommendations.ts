import { Pageable, Paginated } from "../../../util";
import { TVShowListResult } from "../../TV";

export interface Accountv4TVShowRecommendations extends Paginated {
    results?: TVShowListResult[]
}

export interface Accountv4TVShowRecommendationsQueryString extends Pageable  {
    sort_by?: "first_air_date.asc" | "first_air_date.desc" | "name.asc" | "name.desc" | "vote_average.asc" | "vote_average.desc" | "release_date.asc" | "release_date.desc" | "title.asc" | "title.desc",
}