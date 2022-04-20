import { Identifiable } from "../../util";
import { Keyword } from "../Keywords";

export interface TVKeywords extends Identifiable {
    results?: Keyword[]
}