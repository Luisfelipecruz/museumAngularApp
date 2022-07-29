/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { faker } from '@faker-js/faker';

import { Sponsor } from '../../sponsor/sponsor'
import { ExhibicionDetalle } from '../exhibicionDetalle';
import { ExhibicionDetailComponent } from './exhibicion-detail.component';

describe('ExhibicionDetailComponent', () => {
  let component: ExhibicionDetailComponent;
  let fixture: ComponentFixture<ExhibicionDetailComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule],
      declarations: [ExhibicionDetailComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExhibicionDetailComponent);
    component = fixture.componentInstance;

    let sponsor = new Sponsor(
      faker.datatype.number(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      faker.lorem.sentence()
    );

    component.exhibitionDetail =
      new ExhibicionDetalle(
        faker.datatype.number(),
        faker.datatype.number(),
        faker.datatype.number(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        sponsor,
        []
      );

      component.exhibicionDetail =
      new ExhibicionDetalle(
        faker.datatype.number(),
        faker.datatype.number(),
        faker.datatype.number(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        sponsor,
        []
      );

    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
