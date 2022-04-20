import { Identifiable } from "../../util";

export interface TVWatchProviders extends Identifiable {
    results?: TVWatchProvidersResults
}

export interface TVWatchProvidersResults {
    AR?: TVWatchProviderDetails,
    AT?: TVWatchProviderDetails,
    AU?: TVWatchProviderDetails,
    BE?: TVWatchProviderDetails,
    BR?: TVWatchProviderDetails,
    CA?: TVWatchProviderDetails,
    CH?: TVWatchProviderDetails,
    CL?: TVWatchProviderDetails,
    CO?: TVWatchProviderDetails,
    CZ?: TVWatchProviderDetails,
    DE?: TVWatchProviderDetails,
    DK?: TVWatchProviderDetails,
    EC?: TVWatchProviderDetails,
    ES?: TVWatchProviderDetails,
    FI?: TVWatchProviderDetails,
    FR?: TVWatchProviderDetails,
    GB?: TVWatchProviderDetails,
    HU?: TVWatchProviderDetails,
    IE?: TVWatchProviderDetails,
    IN?: TVWatchProviderDetails,
    IT?: TVWatchProviderDetails,
    JP?: TVWatchProviderDetails,
    MX?: TVWatchProviderDetails,
    NL?: TVWatchProviderDetails,
    NO?: TVWatchProviderDetails,
    NZ?: TVWatchProviderDetails,
    PE?: TVWatchProviderDetails,
    PL?: TVWatchProviderDetails,
    PT?: TVWatchProviderDetails,
    RO?: TVWatchProviderDetails,
    RU?: TVWatchProviderDetails,
    SE?: TVWatchProviderDetails,
    TR?: TVWatchProviderDetails,
    US?: TVWatchProviderDetails,
    VE?: TVWatchProviderDetails,
    ZA?: TVWatchProviderDetails,
}

export interface TVWatchProviderDetails {
    link?: string,
    flatrate?: TVWatchProvider[],
    rent?: TVWatchProvider[],
    buy?: TVWatchProvider[],
}

export interface TVWatchProvider{
    display_priority?: number,
    logo_path?: string,
    provider_id?: number,
    provider_name?: string
}