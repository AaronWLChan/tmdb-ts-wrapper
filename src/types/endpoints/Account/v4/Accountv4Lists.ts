import { Identifiable, Paginated } from "../../../util";

export interface Accountv4Lists extends Paginated {
    results?: Accountv4ListsResult[]
}

interface Accountv4ListsResult extends Identifiable {
    iso_639_1?: string,
    featured?: number,
    description?: string,
    revenue?: string,
    public?: number,
    name?: string,
    updated_at?: string,
    created_at?: string,
    sort_by?: number,
    backdrop_path?: string,
    runtime?: string,
    average_rating?: number,
    iso_3166_1?: string,
    adult?: number,
    number_of_items?: number,
    poster_path?: string,
}