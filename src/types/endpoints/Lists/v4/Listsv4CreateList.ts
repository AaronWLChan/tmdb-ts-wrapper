import { Identifiable, Response } from "../../../util";

export interface Listsv4CreateListRequestBody {
    name: string,
    iso_639_1: string,
    description?: string,
    public?: boolean,
    iso_3166_1?: string,
}

export interface Listsv4CreateListResponse extends Response, Identifiable {
    success?: boolean,
}