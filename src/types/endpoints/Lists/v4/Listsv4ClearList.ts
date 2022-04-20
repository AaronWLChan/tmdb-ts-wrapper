import { Identifiable, Response } from "../../../util";

export interface Listsv4ClearListResponse extends Response, Identifiable {
    items_deleted?: number,
    success?: boolean
}