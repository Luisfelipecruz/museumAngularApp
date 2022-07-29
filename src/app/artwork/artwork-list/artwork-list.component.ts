import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Artwork } from '../artwork';
import { ArtworkService } from '../artwork.service';
import { ExhibicionService } from '../../exhibicion/exhibicion.service';

@Component({
  selector: 'app-artwork-list',
  templateUrl: './artwork-list.component.html',
  styleUrls: ['./artwork-list.component.css'],
})
export class ArtworkListComponent implements OnInit {

  @Input() exhibitionId!: number;

  create: Boolean = false;
  selected: Boolean = false;
  vieneExhibicion: Boolean = false;
  selectedArtwork!: Artwork;
  artworks: Array<Artwork> = [];
  idArtwork!: string;

  constructor(
    private artworkService: ArtworkService,
    private exhibicionService: ExhibicionService,
    private route: ActivatedRoute
  ) { }

  getArtworks(): void {
    if (this.exhibitionId != undefined) {
      this.exhibicionService.getExhibicionArtwork(this.exhibitionId).subscribe((artworks) => {
        this.artworks = artworks;
        this.vieneExhibicion = true;
      });

    } else {
      this.artworkService.getArtworks().subscribe((artworks) => {
        this.artworks = artworks;
      });
    }
  }

  onSelected(artwork: Artwork):void {
    this.create = false;
    this.selected = true;
    this.selectedArtwork = artwork;
    console.log(artwork);
  }

  getArtworkById() {
    this.artworkService.getArtworkById(this.idArtwork).subscribe(art => {
      this.selectedArtwork = art;
    })
    if (this.selectedArtwork === undefined) {
      this.selected = true;
    }
  }

  detailByroute() {
    if (this.idArtwork === undefined) {
      this.route.params.subscribe((params: Params) => {
        this.idArtwork = params['id'];
      })
      if (this.idArtwork) {
        this.getArtworkById();
      }
    }
  }

  onCreate() {
    this.create = true;
    this.selected = false;
  }

  ngOnInit() {
    this.getArtworks();
    this.detailByroute();
  }
}
