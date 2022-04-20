import { Identifiable, Pageable } from "../../util"

export interface PersonChanges {
    changes?: PersonChange[]
}

interface PersonChange {
    key?: string,
    items?: PersonChangeItem[]
}

interface PersonChangeItem extends Identifiable{
    action?: string,
    time?: string,
    original_value?: PersonChangeItemOriginalValue
}

interface PersonChangeItemOriginalValue{
    profile?: PersonChangeItemOriginalValueProfile
}

interface PersonChangeItemOriginalValueProfile{
    file_path?: string,
}

export interface PersonChangesQueryString extends Pageable {
    end_date?: string,
    start_date?: string,
}