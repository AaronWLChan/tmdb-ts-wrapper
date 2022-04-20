import { Identifiable } from "../../util";

export interface TVSeasonExternalIds extends Identifiable {
    freebase_mid?: string | null,
    freebase_id?: string | null,
    tvdb_id?: number | null,
    tvrage_id?: number | null,
}