import { Component, OnInit, Input } from '@angular/core';
import { MuseumService } from './../museum.service';
import { Museum } from './../museum';

import { ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-museum-list',
  templateUrl: './museum-list.component.html',
  styleUrls: ['./museum-list.component.css'],
})
export class MuseumListComponent implements OnInit {
  create: Boolean = false;
  selected: Boolean = false;
  selectedMuseum!: Museum;
  museums: Array<Museum> = [];
  idMuseum!: string;

  constructor(
    private museumService: MuseumService,
    private route: ActivatedRoute) {}

  getMuseums(): void {
    this.museumService.getMuseums().subscribe((museums) => {
      this.museums = museums;
    });
  }

  onSelected(museum: Museum): void {
    this.create = false;
    this.selected = true;
    this.selectedMuseum = museum;
  }

  onCreate() {
    this.create = true;
    this.selected = false;
  }

  getMuseumById(){
    this.museumService.getMuseumById(this.idMuseum).subscribe(museum => {
      this.selectedMuseum = museum;
    })
    if(this.selectedMuseum === undefined){
      this.selected = true;
    }
  }

  detailByroute(){
    if(this.idMuseum === undefined){
      this.route.params.subscribe((params: Params) => {
        this.idMuseum = params['id'];
      })
      if(this.idMuseum){
        this.getMuseumById();
      }
    }
  }

  ngOnInit() {
    this.getMuseums();
    this.detailByroute();
  }

}
