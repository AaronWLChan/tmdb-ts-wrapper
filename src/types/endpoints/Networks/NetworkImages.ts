import { Logo } from "../../tmdb";
import { Identifiable } from "../../util";

export interface NetworkImages extends Identifiable {
    logos?: Logo[]
}