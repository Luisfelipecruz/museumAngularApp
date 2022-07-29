import { Sponsor } from "../sponsor/sponsor";
import { Artwork } from "../artwork/artwork";

export class ExhibicionDetalle {
  id: number;
  idMuseum: number;
  idSponsor: number;
  name: string;
  description: string;
  sponsor: Sponsor;
  artworks:  Array<Artwork>;

  constructor(
    id: number,
    idMuseum: number,
    idSponsor: number,
    name: string,
    description: string,
    sponsor: Sponsor,
    artworks: Array<Artwork>
  ) {
    this.id = id;
    this.idMuseum = idMuseum;
    this.idSponsor = idSponsor;
    this.name = name;
    this.description = description;
    this.sponsor = sponsor;
    this.artworks = artworks;
  }
}
