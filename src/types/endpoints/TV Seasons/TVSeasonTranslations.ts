import { Translation } from "../../tmdb";
import { Identifiable } from "../../util";

export interface TVSeasonTranslations extends Identifiable {
    translations?: TVSeasonTranslation[]
}

interface TVSeasonTranslation extends Translation {
    data?: TVSeasonTranslationData
}

interface TVSeasonTranslationData {
    name?: string,
    overview?: string,
}