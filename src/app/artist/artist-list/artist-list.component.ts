import { Component, OnInit } from '@angular/core';
import { ArtistDetail } from '../artist-detail';
import { ArtistService } from '../artist.service';

@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.css']
})
export class ArtistListComponent implements OnInit {

  artists: Array<ArtistDetail> = [];
  selectedArtist!: ArtistDetail;
  selected: boolean = false;

  constructor(private artistService: ArtistService) { }

  getArtists(){
    this.artistService.getArtists().subscribe(artists=>{
      this.artists = artists;
    })
  }

  selectArtist(artist: ArtistDetail){
    this.selectedArtist = artist;
    this.selected = true;
  }

  ngOnInit() {
    this.getArtists();
  }

}
