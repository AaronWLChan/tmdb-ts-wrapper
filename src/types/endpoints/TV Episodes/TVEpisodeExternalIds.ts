import { Identifiable } from "../../util";

export interface TVEpisodeExternalIds extends Identifiable {
    imdb_id?: string | null,
    freebase_mid?: string | null,
    freebase_id?: string | null,
    tvdb_id?: string | null,
    tvrage_id?: string | null,
}