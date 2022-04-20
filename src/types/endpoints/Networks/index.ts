import { Identifiable } from "../../util";

export interface Network extends Identifiable {
    headquarters?: string,
    homepage?: string,
    logo_path?: string,
    name?: string,
    origin_country?: string,
}

export * from './NetworkAlternativeNames'
export * from './NetworkImages'