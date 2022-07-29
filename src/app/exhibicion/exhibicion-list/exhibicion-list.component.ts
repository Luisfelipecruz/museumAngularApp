import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ExhibicionDetalle } from '../exhibicionDetalle';
import { ExhibicionService } from '../exhibicion.service';

import { Museum } from '../../museum/museum';
import { MuseumService } from '../../museum/museum.service';

import { Artwork } from '../../artwork/artwork';
import { ArtworkService } from '../../artwork/artwork.service';
@Component({
  selector: 'app-exhibicion-list',
  templateUrl: './exhibicion-list.component.html',
  styleUrls: ['./exhibicion-list.component.css'],
})
export class ExhibicionListComponent implements OnInit {
  @Input() idMuseum!: number;

  verDetalle: Boolean = false;
  verObras: Boolean = false;
  selectedExhibicion!: ExhibicionDetalle;
  asignadaExhibicion!: ExhibicionDetalle;

  exhibicionesPorMuseo: Array<ExhibicionDetalle> = [];
  exhibicionesAll: Array<ExhibicionDetalle> = [];
  artworkAll: Array<Artwork> = [];
  idListMuseos: Array<number> = [];
  museums: Array<Museum> = [];
  selected: Boolean = false;
  vieneNavbar!: Boolean;

  createSponsor: Boolean = false;
  selectedSponsor: Boolean = false;

  constructor(
    private exhibicionService: ExhibicionService,
    private museumService: MuseumService,
    private artworkService: ArtworkService,
    private route: ActivatedRoute) { }

  getExhibiciones(idMuseum: number): void {
    this.exhibicionService
      .getExhibiciones(idMuseum)
      .subscribe((exhibicionesPorMuseo) => {
        this.exhibicionesAll = exhibicionesPorMuseo;
      });
  }

  getArtwork(): void {
    this.artworkService.getArtworks().subscribe((artworks) => {
      this.artworkAll = artworks;
    });
  }

  asignarObraParaExhibicion(exhibitionSel:ExhibicionDetalle,artwork_id_1:number):void {
    this.exhibicionService.asignarObraParaExhibicion(exhibitionSel.id,artwork_id_1).subscribe((exhibicion) => {
    this.asignadaExhibicion = exhibicion;
    this.exhibicionesAll = [];
    this.getAllExhibiciones();
    this.exhibicionService.getExhibicionDetail(exhibitionSel.idMuseum, exhibitionSel.id )
    .subscribe((exhibicion) => {
      this.selectedExhibicion = exhibicion;
    });
    this.verObras = false;
  })
  }


  getMuseums(): void {
    this.museumService.getMuseums().subscribe((museums) => {
      this.museums = museums;
    });
  }

  getMuseumsById(idMuseum: string): void {
    this.museumService.getMuseumById(idMuseum).subscribe((museum) => {
      this.museums.push(museum);
      this.idListMuseos.push(museum.id);
      this.extractIdMuseos();
      this.getExhibicionesList();
      this.selected = true;
    });
  }

  getAllExhibiciones(): void {
    this.museumService.getMuseums().subscribe((museums) => {
      this.museums = museums;
      this.extractIdMuseos();
      this.getExhibicionesList();
      this.selected = true;
    });
  }

  extractIdMuseos() {
    if (this.museums != undefined) {
      var listaIterable: Array<number> = [];
      this.museums.forEach(m => {
        listaIterable = listaIterable.concat(m.id);
      });
      this.idListMuseos = listaIterable;
    }
  }

  getExhibicionesList() {
    if (this.idListMuseos != undefined) {
      this.idListMuseos.forEach(id => {
        this.exhibicionService
          .getExhibiciones(id)
          .subscribe((exhibicionesPorMuseo) => {
            exhibicionesPorMuseo.forEach(element => {
              element.idMuseum = id;
            });
            this.exhibicionesAll = this.exhibicionesAll.concat(exhibicionesPorMuseo);
          });
      });
    }
  }

  validarRuta(): Boolean {
    if(this.vieneNavbar === undefined){
      this.route.params.subscribe((params: Params) => {
        this.vieneNavbar = params['navbar'];
      })
    }
    return this.vieneNavbar
  }

  valiexttractIdMuseo() {
    if(this.idMuseum === undefined){
      this.route.params.subscribe((params: Params) => {
        this.idMuseum = params['idMuseum'];
        this.getMuseumsById(this.idMuseum.toString());
        this.selected = false;
        this.vieneNavbar = true;
      })
    }
  }

  ngOnInit() {
    this.getArtwork();
    if(this.validarRuta()){
      this.getAllExhibiciones();
    }else{
      this.valiexttractIdMuseo();
    }
    if(this.idMuseum != undefined){
      this.getExhibiciones(this.idMuseum);
      this.selected = true;
    }
  }

  onSelected(exhibicionSel: ExhibicionDetalle):void {
    this.verDetalle = true;
    this.verObras = false;
    this.selectedExhibicion = exhibicionSel;
  }

  desplegarObras():void {
    this.verObras = true;
  }

  onCreateSponsor() {
    this.createSponsor = true;
    this.selectedSponsor = false;
  }

  ngOnChanges() {
    this.getExhibiciones(this.idMuseum);
    this.selected = true;
  }
}
