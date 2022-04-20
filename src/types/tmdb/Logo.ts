import { Identifiable } from "../util";
import { Image } from "./Image";

export interface Logo extends Identifiable, Image {
    file_type?: ".svg" | ".png"
}