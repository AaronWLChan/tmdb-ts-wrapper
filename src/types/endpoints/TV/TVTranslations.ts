import { Translation } from "../../tmdb";
import { Identifiable } from "../../util";

export interface TVTranslations extends Identifiable {
    translations?: TVTranslation[]
}

export interface TVTranslation extends Translation {
    data?: TVTranslationData
}

export interface TVTranslationData {
    name?: string,
    overview?: string,
    homepage?: string
}