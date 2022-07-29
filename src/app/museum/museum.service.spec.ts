/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MuseumService } from './museum.service';

describe('Service: Museum', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MuseumService]
    });
  });

  it('should ...', inject([MuseumService], (service: MuseumService) => {
    expect(service).toBeTruthy();
  }));
});
