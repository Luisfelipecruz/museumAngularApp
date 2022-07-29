import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ExhibicionDetalle } from '../exhibicionDetalle';
import { ExhibicionService } from '../exhibicion.service';

@Component({
  selector: 'app-exhibicion-detail',
  templateUrl: './exhibicion-detail.component.html',
  styleUrls: ['./exhibicion-detail.component.css']
})
export class ExhibicionDetailComponent implements OnInit {

  @Input() exhibitionDetail!: ExhibicionDetalle;
  museumId!:number;
  exhibicionId!:number;
  exhibicionDetail!: ExhibicionDetalle;

  constructor(
    private route: ActivatedRoute,
    private exhibicionService: ExhibicionService) { }

  ngOnInit() {
    this.museumId = Number(this.route.snapshot.paramMap.get('museumId')!);
    this.exhibicionId = Number(this.route.snapshot.paramMap.get('id')!);
    this.exhibicionService
      .getExhibicionDetail(this.museumId, this.exhibicionId)
      .subscribe(exhibicion => {
        this.exhibicionDetail = exhibicion;
      });
  }
}
