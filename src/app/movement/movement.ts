
export class Movement {
  id: number;
  name: string;
  countryOfOrigin: string;
  activeYears: string;
  description: string;

  public constructor(
    id: number,
    name: string,
    description: string,
    countryOfOrigin: string,
    activeYears: string,
  ) {
    this.id = id;
    this.name = name;
    this.countryOfOrigin = countryOfOrigin;
    this.activeYears = activeYears;
    this.description = description;
  }
}
 //7. Creación componente lista
 // ->7.1. y binding con mod. art"
