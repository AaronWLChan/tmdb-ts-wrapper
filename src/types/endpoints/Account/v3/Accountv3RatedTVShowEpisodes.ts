import { Pageable, Paginated, Translatable } from "../../../util";
import { TVEpisodeListResultWithRating } from "../../TV Episodes";

export interface Accountv3RatedTVShowEpisodes extends Paginated {
    results?: TVEpisodeListResultWithRating[]
}

export interface Accountv3RatedTVShowEpisodesQueryString extends Pageable, Translatable{
    session_id: string,
    sort_by?: "created_at.asc" | "created_at.desc",
}
