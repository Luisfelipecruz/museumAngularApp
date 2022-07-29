import { Artist } from "../artist/artist";
import { Movement } from "./movement";

export class MovementDetail extends Movement {
  artists: Array<Artist> = [];

  constructor(
    id: number,
    name: string,
    countryOfOrigin: string,
    description: string,
    activeYears: string,
    artists: Array<Artist>,

  ) {
    super(id, name, countryOfOrigin, activeYears, description)
    this.artists = artists;

  }
}
