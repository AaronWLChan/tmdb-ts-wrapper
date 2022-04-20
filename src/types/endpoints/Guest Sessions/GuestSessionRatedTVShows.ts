import { TVShowListResultWRatingObject } from "../TV";
import { Paginated } from "../../util";
import { GuestSessionRatedQueryString } from ".";


export interface GuestSessionRatedTVShows extends Paginated {
    results?: TVShowListResultWRatingObject[]
}

export interface GuestSessionRatedTVShowsQueryString extends GuestSessionRatedQueryString {}
