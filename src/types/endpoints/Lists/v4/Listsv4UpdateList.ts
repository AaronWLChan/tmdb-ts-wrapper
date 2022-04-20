import { Identifiable, Response } from "../../../util";

export interface Listsv4UpdateListRequestBody {
    name: string,
    description?: string,
    public?: boolean,
    sort_by?: "original_order.asc" | "original_order.desc" | "vote_average.asc" | "vote_average.desc" | "primary_release_date.asc" | "primary_release_date.desc" | "title.asc" | "title.desc"
}

export interface Listsv4UpdateListResponse extends Response, Identifiable {
    success?: boolean,
}