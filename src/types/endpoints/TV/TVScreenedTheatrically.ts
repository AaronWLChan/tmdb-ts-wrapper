import { Identifiable } from "../../util";

export interface TVScreenedTheatrically extends Identifiable {
    results?: TVScreenedTheatricallyResult[]
}

export interface TVScreenedTheatricallyResult extends Identifiable {
    episode_number?: number,
    season_number?: number
}