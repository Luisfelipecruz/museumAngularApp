//8. Definir el objeto del formulario
// Importar las librerias
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ToastrService } from 'ngx-toastr';
import { Artist } from "../artist"
import { ArtistService } from '../artist.service';

// 9. Declarar y realizar validaciones
// 10. Ir artist.create.component.html -> refresh
@Component({
  selector: 'app-artist-create',
  templateUrl: './artist-create.component.html',
  styleUrls: ['./artist-create.component.css']
})
export class ArtistCreateComponent implements OnInit {

  artistForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private artistService: ArtistService
  ) { }

  // 12. 2 Esto viene de servicio
  createArtist(artist: Artist){
    this.artistService.createArtist(artist).subscribe(artist=>{
      console.info("The artist was created: ", artist)
      this.toastr.success("Confirmation", "Artist created")
      this.artistForm.reset();
    })
  }

  cancelCreation(){
    this.artistForm.reset();
  }

  ngOnInit() {
    // 11. agregar validaciones  -> Html
    // Actualización del servicio
    // 12. artist\artist.service.ts
    // 13. artist-create.component.spec.ts
    this.artistForm = this.formBuilder.group({
      name: ["", [Validators.required, Validators.minLength(2)]],
      image: ["", Validators.required],

      birthdate: ["", Validators.required],
      birthplace: ["", Validators.required],

    })
  }
}
