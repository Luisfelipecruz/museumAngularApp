import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ExhibicionService } from '../exhibicion.service'
import { ExhibicionDetalle } from '../exhibicionDetalle'
import { SponsorService } from '../../sponsor/sponsor.service'
import { Sponsor } from 'src/app/sponsor/sponsor';
import { Museum } from 'src/app/museum/museum';
import { MuseumService } from '../../museum/museum.service'

@Component({
  selector: 'app-exhibicion-create',
  templateUrl: './exhibicion-create.component.html',
  styleUrls: ['./exhibicion-create.component.css']
})
export class ExhibicionCreateComponent implements OnInit {

  exhibitionForm!: FormGroup;
  sponsors: Array<Sponsor> = [];
  museums: Array<Museum> = [];

  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private exhibicionService: ExhibicionService,
    private sponsorService: SponsorService,
    private museumService: MuseumService
  ) { }

  ngOnInit() {
    this.getsponsors();
    this.getmuseums();
    this.exhibitionForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      description: ['', Validators.required],
      idSponsor: ['', Validators.required],
      idMuseum: ['', Validators.required],
    });
  }

  // {{protocol}}://{{host}}/api/museums/{{museum_id}}/exhibitions
  // "name": "Raphael",
  // "description": "One of the first-ever exhibitions to explore Raphael's complete career",
  // "sponsor": {
  //     "id": {{sponsor_id}}
  // }

  getsponsors(): void {
    this.sponsorService.getSponsors().subscribe((sponsors) => {
      this.sponsors = sponsors;
    });
  }

  getmuseums(): void {
    this.museumService.getMuseums().subscribe((museums) => {
      this.museums = museums;
    });
  }

  createExhibicion(exhibicion: ExhibicionDetalle) {
    let sponsorIter = new Sponsor(exhibicion.idSponsor, '', '', '');
    exhibicion.sponsor = sponsorIter;
    this.exhibicionService.createExhibicion(
      exhibicion.idMuseum,
      exhibicion.idSponsor,
      exhibicion).subscribe((exhibicion) => {
        console.info("The exhibition was created: ", exhibicion)
        this.toastr.success('Confirmation', 'Exhibition created');
        this.exhibitionForm.reset();
      });
  }

  cancelCreation() {
    this.exhibitionForm.reset();
  }

}
