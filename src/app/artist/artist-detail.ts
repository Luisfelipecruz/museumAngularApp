import { Movement } from "../movement/movement";
import { Artist } from "./artist";

export class ArtistDetail extends Artist {
  movements: Array<Movement>;

  constructor(id: number,
    name: string,
    birthdate: any,
    image: string,
    description: string,
    movements: Array<Movement>
    ){
      super(id, name, birthdate, image, description);
      this.movements = movements;
    }
}

