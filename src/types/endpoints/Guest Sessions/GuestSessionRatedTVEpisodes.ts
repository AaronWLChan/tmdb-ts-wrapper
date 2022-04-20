import { GuestSessionRatedQueryString } from ".";
import { Paginated } from "../../util";
import { TVEpisodeListResultWithRating } from "../TV Episodes";

export interface GuestSessionRatedTVEpisodes extends Paginated {
    results?: TVEpisodeListResultWithRating[]
}

export interface GuestSessionRatedTVEpisodesQueryString extends GuestSessionRatedQueryString {}

