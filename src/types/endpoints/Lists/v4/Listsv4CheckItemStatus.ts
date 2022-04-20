import { Identifiable, Response } from "../../../util";

export interface Listsv4CheckItemStatusResponse extends Response, Identifiable {
    media_type?: string,
    success?: boolean,
    media_id?: number,
}

export interface Listsv4CheckItemStatusQueryString {
    media_id: number,
    media_type: "movie" | "tv"
}