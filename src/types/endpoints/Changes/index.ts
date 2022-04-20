import { Identifiable, Pageable, Paginated } from "../../util";

export interface Changes extends Paginated {
    results?: ChangeResult[]
}

export interface ChangeResult extends Identifiable {
    adult?: boolean | null
}

export interface ChangeListQueryString extends Pageable {
    end_date?: string,
    start_date?: string,
}

export * from './ChangesForMovie'
export * from './ChangesForPerson'
export * from './ChangesForTV'