import { Image } from './image';
import { Artist } from '../artist/artist';
export class Artwork {
  id: number;
  name: string;
  year: number;
  description: string;
  type: string;
  mainImage: string;
  image: Image;
  artist: Artist;
  constructor(
    id: number,
    name: string,
    year: number,
    description: string,
    type: string,
    mainImage: string,
    image: Image,
    artist: Artist,
  ) {
    this.id = id;
    this.name = name;
    this.year = year;
    this.description = description;
    this.type = type;
    this.image = image;
    this.mainImage = mainImage;
    this.artist = artist;
  }
}
