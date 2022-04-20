import { AlternativeName } from "../../tmdb";
import { Identifiable } from "../../util";

export interface NetworkAlternativeNames extends Identifiable {
    results?: AlternativeName[]
}