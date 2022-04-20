import { Logo } from "../../tmdb";
import { Identifiable } from "../../util";

export interface CompanyImages extends Identifiable {
    logos?: Logo[]
}