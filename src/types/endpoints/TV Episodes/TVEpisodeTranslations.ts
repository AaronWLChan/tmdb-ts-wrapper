import { Translation } from "../../tmdb";
import { Identifiable } from "../../util";

export interface TVEpisodeTranslations extends Identifiable {
    translations?: TVEpisodeTranslation[]
}

export interface TVEpisodeTranslation extends Translation {
    data?: TVEpisodeTranslationData
}

export interface TVEpisodeTranslationData{
    name?: string,
    overview?: string,
}