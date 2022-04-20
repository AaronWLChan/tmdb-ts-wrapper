import { Identifiable } from "../../util";
import { Keyword } from "../Keywords";

export interface MovieKeywords extends Identifiable{
    keywords?: Keyword[]
}