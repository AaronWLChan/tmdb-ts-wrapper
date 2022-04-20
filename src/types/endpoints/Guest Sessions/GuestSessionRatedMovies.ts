import { GuestSessionRatedQueryString } from ".";
import { Paginated } from "../../util";
import { MovieListResultWRatingObject } from "../Movies";

export interface GuestSessionRatedMovies extends Paginated {
    results?: MovieListResultWRatingObject[]
}

export interface GuestSessionRatedMoviesQueryString extends GuestSessionRatedQueryString {}
