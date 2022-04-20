import { Response } from "../../../util";

export interface Listsv4UpdateItemsResponse extends Response{
    success?: boolean,
    results?: Listsv4UpdateItemsResponseResult[]
}

export interface Listsv4UpdateItemsRequestBody {
    items: Listsv4UpdateItemsItem[]
}

export interface Listsv4UpdateItemsItem{
    media_type: "movie" | "tv",
    media_id: number,
    comment: string,
}

export interface Listsv4UpdateItemsResponseResult{
    media_type?: "movie" | "tv",
    media_id?: number,
    success?: boolean
}
