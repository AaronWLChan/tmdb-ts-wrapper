import { Identifiable, Pageable, Paginated } from "../../util";

export interface SearchKeywords extends Paginated{
    results?: SearchKeywordsResult[]
}

export interface SearchKeywordsResult extends Identifiable {
    name?: string,
}

export interface SearchKeywordsQueryString extends Pageable{
    query: string,
}