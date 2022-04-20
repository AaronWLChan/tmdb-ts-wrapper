import { Identifiable } from "../../util";

export interface TVEpisodeAccountStates extends Identifiable {
    rated?: boolean | { value?: number }
}