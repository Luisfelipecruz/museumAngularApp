import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import { ArtistDetail } from 'src/app/artist/artist-detail';
import { ArtistService } from 'src/app/artist/artist.service';
import { ArtworkService } from '../artwork.service';
import { Artwork } from '../artwork';
import { Image } from '../image';

@Component({
  selector: 'app-artwork-create',
  templateUrl: './artwork-create.component.html',
  styleUrls: ['./artwork-create.component.css'],
})
export class ArtworkCreateComponent implements OnInit {
  artworkForm!: FormGroup;
  artists: Array<ArtistDetail> = [];
  idArtist: number = 0;
  idArtwork: number = 0;

  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private artworkService: ArtworkService,
    private artistService: ArtistService
  ) { }

  ngOnInit() {
    this.artworkForm = this.formBuilder.group({
      idArtist: ['', Validators.required],
      name: ['', [Validators.required, Validators.minLength(5)]],
      description: ['', Validators.required],
      year: ['', Validators.required],
      type: ['Painting'],
      altText: [""],
      height: [0],
      width: [0],
      mainImage: ['', Validators.required]
    });

    this.getArtists();
  }

  createArtwork(artwork: Artwork) {

    this.artworkService.createArtwork(artwork, this.artworkForm.value.idArtist)
      .subscribe((artwork) => {
        this.idArtwork = artwork.id;
        var source = this.artworkForm.value.mainImage;
        var altText = this.artworkForm.value.altText;
        var height = this.artworkForm.value.height;
        var width = this.artworkForm.value.width;
        var image = new Image(0, source, altText, height, width);
        console.log(image);
        this.artworkService.createImageArtwork(image, this.idArtwork);

        this.toastr.success('Confirmation', 'Artwork created');
        this.artworkForm.reset();
      });
  }

  cancelCreation() {
    this.artworkForm.reset();
  }

  getArtists() {
    this.artistService.getArtists().subscribe((artists) => {
      this.artists = artists;
    });
  }
}
