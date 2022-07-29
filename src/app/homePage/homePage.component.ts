import { Component, OnInit } from '@angular/core';
import { MuseumService } from '../museum/museum.service';
import { ArtistService } from '../artist/artist.service';
import { Museum } from '../museum/museum';
import { ArtistDetail } from '../artist/artist-detail';
import { Artwork } from '../artwork/artwork';
import { ArtworkService } from '../artwork/artwork.service';

@Component({
  selector: 'app-homePage',
  templateUrl: './homePage.component.html',
  styleUrls: ['./homePage.component.css']
})
export class HomePageComponent implements OnInit {

  dataMuseum: Array<Museum> = [];
  dataArtists: Array<ArtistDetail> = [];
  dataArtworks: Array<Artwork> = [];

  getMuseums(): void {
    this.museumService.getMuseums().subscribe((museums) => {
      this.dataMuseum = museums;
    });
  }

  getArtists(){
    this.artistService.getArtists().subscribe(artists=>{
      this.dataArtists = artists;
    })
  }

  getArtworks(): void {
    this.artworkService.getArtworks().subscribe((artworks) => {
      this.dataArtworks = artworks;
    });
  }

 constructor(
   private museumService: MuseumService,
   private artistService: ArtistService,
   private artworkService: ArtworkService
  ) { }

 ngOnInit() {
  this.getMuseums();
  this.getArtists();
  this.getArtworks()
}
}

