import { Response } from "../../../util";

export interface Accountv3AddToWatchlistRequestBody {
    media_type: "movie" | "tv",
    media_id: number,
    watchlist: boolean
}

export interface Accountv3AddToWatchlistResponse extends Response {}