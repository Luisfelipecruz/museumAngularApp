//6.1. Clase ---> artist.module.ts
// exportarlo
export class Artist {
  id: number;
  name: string;
  birthplace: string;
  birthdate: string;
  image: string;
  public constructor(
    id: number,
    name: string,
    birthplace: string,
    birthdate: string,
    image: string
  ) {
    this.id = id;
    this.name = name;
    this.birthplace = birthplace;
    this.birthdate = birthdate;
    this.image = image;
  }
}
 //7. Creación componente lista
 // ->7.1. y binding con mod. art"
