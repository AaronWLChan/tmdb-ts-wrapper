import { Translation } from "../../tmdb";
import { Identifiable } from "../../util";

export interface CollectionTranslations extends Identifiable {
    translations?: CollectionTranslation
}

export interface CollectionTranslation extends Translation {
    data?: CollectionTranslationData
}

export interface CollectionTranslationData extends Translation {
    title?: string,
    overview?: string,
    homepage?: string
}