import { Identifiable } from "../../util";

export interface TVAlternativeTitles extends Identifiable{
    results?: TVAlternativeTitlesResult[]
}

export interface TVAlternativeTitlesResult{
    title?: string,
    iso_3166_1?: string,
    type?: string,
}