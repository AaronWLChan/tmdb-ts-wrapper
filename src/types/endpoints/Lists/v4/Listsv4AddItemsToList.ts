import { Response } from "../../../util";

export interface Listsv4AddItemsToListResponse extends Response{
    success?: boolean,
    results?: Listsv4AddItemsToListResponseResult[]
}

export interface Listsv4AddItemsToListRequestBody {
    items: Listsv4AddItemsToListItem[]
}

export interface Listsv4AddItemsToListItem{
    media_type: "movie" | "tv",
    media_id: number,
}

export interface Listsv4AddItemsToListResponseResult{
    media_type?: "movie" | "tv",
    media_id?: number,
    success?: boolean
}
