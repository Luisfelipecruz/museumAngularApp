/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { faker } from '@faker-js/faker';

import { Sponsor } from '../../sponsor/sponsor';
import { Artwork } from '../../artwork/artwork';
import { Artist } from '../../artist/artist';
import { Image } from '../../artwork/image';
import { Museum } from '../../museum/museum';
import { Exhibicion } from '../../exhibicion/exhibicion';

import { ExhibicionDetalle } from '../exhibicionDetalle';
import { ExhibicionListComponent } from './exhibicion-list.component';

describe('ExhibicionListComponent', () => {
  let component: ExhibicionListComponent;
  let fixture: ComponentFixture<ExhibicionListComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule],
      declarations: [ ExhibicionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExhibicionListComponent);
    component = fixture.componentInstance;

    let sponsor = new Sponsor(
      faker.datatype.number(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      faker.lorem.sentence()
    );

    let image = new Image(
      faker.datatype.number(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      faker.datatype.number(),
      faker.datatype.number()
    );

    let artist = new Artist(
      faker.datatype.number(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      faker.lorem.sentence()
    );

    component.selectedExhibicion =
    new ExhibicionDetalle(
      faker.datatype.number(),
      faker.datatype.number(),
      faker.datatype.number(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      sponsor,
      []
    );

    component.asignadaExhibicion =
    new ExhibicionDetalle(
      faker.datatype.number(),
      faker.datatype.number(),
      faker.datatype.number(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      sponsor,
      []
    );

    component.exhibicionesPorMuseo = [new ExhibicionDetalle(
        faker.datatype.number(),
        faker.datatype.number(),
        faker.datatype.number(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        sponsor,
        []
      )];

      component.exhibicionesAll = [new ExhibicionDetalle(
        faker.datatype.number(),
        faker.datatype.number(),
        faker.datatype.number(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        sponsor,
        []
      )];

      component.artworkAll = [new Artwork(
        faker.datatype.number(),
        faker.lorem.sentence(),
        faker.datatype.number(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        image,
        artist
      )];

      component.idListMuseos = [faker.datatype.number()];

      component.museums = [new Museum(
        faker.datatype.number(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        [],
        []
      )];

    fixture.detectChanges();
    debug = fixture.debugElement;

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
