import { Response } from "../../../util";

export interface Accountv3MarkAsFavoriteRequestBody{
    media_type: "movie" | "tv",
    media_id: number,
    favorite: boolean
}

export interface Accountv3MarkAsFavoriteResponse extends Response {}