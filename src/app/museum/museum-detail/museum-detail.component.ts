import { Museum } from './../museum';
import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-museum-detail',
  templateUrl: './museum-detail.component.html',
  styleUrls: ['./museum-detail.component.css'],
})
export class MuseumDetailComponent implements OnInit {

  @Input() museumDetail!: Museum;

  constructor() {}

  ngOnInit() {
  }

}
