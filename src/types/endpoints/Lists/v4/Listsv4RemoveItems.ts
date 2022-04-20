import { Response } from "../../../util";

export interface Listsv4RemoveItemsResponse extends Response{
    success?: boolean,
    results?: Listsv4RemoveItemsResponseResult[]
}

export interface Listsv4RemoveItemsRequestBody {
    items: Listsv4RemoveItemsItem[]
}

export interface Listsv4RemoveItemsItem{
    media_type: "movie" | "tv",
    media_id: number,
}

export interface Listsv4RemoveItemsResponseResult{
    media_type?: "movie" | "tv",
    media_id?: number,
    success?: boolean
}
