import { Identifiable } from "../../util";

export interface Company extends Identifiable {
    description?: string,
    headquarters?: string,
    homepage?: string,
    logo_path?: string,
    name?: string,
    origin_country?: string,
    parent_company?: ParentCompany | null 
}

export interface ParentCompany extends Identifiable {
    name?: string,
    logo_path?: string | null
}

export * from './CompanyAlternativeNames'
export * from './CompanyImages'