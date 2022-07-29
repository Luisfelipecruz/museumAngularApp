import { Component, OnInit, Input } from '@angular/core';
import { Museum } from '../museum/museum';
import { Artwork } from '../artwork/artwork';
import { ArtistDetail } from '../artist/artist-detail';

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.css']
})
export class CarruselComponent implements OnInit {

  @Input() dataArrayMuseum!: Array<Museum>;
  @Input() dataArrayArtist!: Array<ArtistDetail>;
  @Input() dataArrayArtwork!: Array<Artwork>;

 constructor() { }

 ngOnInit() {

 }
}
