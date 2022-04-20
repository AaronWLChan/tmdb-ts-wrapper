import { AlternativeName } from "../../tmdb";
import { Identifiable } from "../../util";

export interface CompanyAlternativeNames extends Identifiable {
    results?: AlternativeName[]
}