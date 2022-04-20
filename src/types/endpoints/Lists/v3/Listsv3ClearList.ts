import { Response } from "../../../util";

export interface Listv3ClearListQueryString{
    session_id: string,
    confirm: boolean
}

export interface Listv3ClearListResponse extends Response {}