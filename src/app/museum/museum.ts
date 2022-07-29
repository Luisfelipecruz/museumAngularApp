import { Exhibicion } from '../exhibicion/exhibicion';
import { Artwork } from '../artwork/artwork';

export class Museum {

  id: number;
  name: string;
  description: string;
  address: string;
  city: string;
  image: string;
  artworks: Array<Artwork> = [];
  exhibitions: Array<Exhibicion> = [];

  constructor(
    id: number,
    name: string,
    description: string,
    address: string,
    city: string,
    image: string,
    artworks: Array<Artwork> = [],
    exhibitions: Array<Exhibicion> = []
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.address = address;
    this.city = city;
    this.image = image;
    this.artworks = artworks;
    this.exhibitions = exhibitions;
  }
}
