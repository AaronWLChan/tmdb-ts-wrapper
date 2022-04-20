import { MovieListResult } from ".";
import { Pageable, Paginated, Translatable } from "../../util";

export interface NowPlaying extends Paginated {
    results?: MovieListResult[],
    dates?: NowPlayingDates
}

export interface NowPlayingDates {
    maximum?: string,
    minimum?: string
}

export interface NowPlayingQueryString extends Pageable, Translatable{
    //ISO_3166_1
    region?: string,
}