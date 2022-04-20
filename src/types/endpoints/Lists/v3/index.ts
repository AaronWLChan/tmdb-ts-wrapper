import { IdentifiableStringOrNumber } from "../../../util";
import { MovieListResult } from "../../Movies";

export interface Listv3 extends IdentifiableStringOrNumber {
    created_by?: string,
    description?: string,
    favorite_count?: number,
    items?: MovieListResult[],
    item_count?: number,
    iso_639_1?: string,
    name?: string,
    poster_path?: string | null
}


export * from './Listsv3CheckItemStatus'
export * from './Listv3CreateList'
export * from './Listv3AddMovie'
export * from './Listsv3RemoveMovie'
export * from './Listsv3ClearList'
export * from './Listsv3DeleteList'