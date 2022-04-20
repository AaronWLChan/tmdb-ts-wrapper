import { Identifiable, Pageable, Paginated } from "../../util";

export interface SearchCompanies extends Paginated {
    results?: SearchCompaniesResult[]
}

export interface SearchCompaniesResult extends Identifiable {
    logo_path?: string | null,
    name?: string
}

export interface SearchCompaniesQueryString extends Pageable {
    query: string,
}