import { Translation } from "../../tmdb";
import { Identifiable } from "../../util";

export interface MovieTranslations extends Identifiable {
    translations?: Translation[]
}