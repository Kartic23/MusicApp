import { Image } from "./image";
import { Track } from "./track";

export class Album{
    id: number;
    name: string;
    label:string;
    total_tracks: number;
    tracks: Track[];
    images: Image[];
}