import { Translation } from "../../tmdb";
import { Identifiable } from "../../util";

export interface PersonTranslations extends Identifiable {
    translations?: PersonTranslation[]
}

export interface PersonTranslation extends Translation {
    data?: { biography?: string }
}