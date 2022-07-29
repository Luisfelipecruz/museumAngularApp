/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ExhibicionService } from './exhibicion.service';

describe('Service: Exhibicion', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ExhibicionService]
    });
  });

  it('should ...', inject([ExhibicionService], (service: ExhibicionService) => {
    expect(service).toBeTruthy();
  }));
});
