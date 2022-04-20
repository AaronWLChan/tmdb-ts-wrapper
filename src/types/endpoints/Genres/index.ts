import { Identifiable } from "../../util";

export interface Genre extends Identifiable {
    name?: string
}

export * from './GenresMovie'
export * from './GenresTV'