import { Response } from "../../../util";

export interface Listv3CreateListRequestBody {
    name?: string,
    description?: string,
    language?: string
}


export interface Listv3CreateListResponse extends Response {
    success?: boolean,
    list_id?: string | number
}