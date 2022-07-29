import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Sponsor } from './sponsor';

@Injectable({
  providedIn: 'root'
})
export class SponsorService {

  private apiUrl: string = environment.baseUrlGrupo14 + 'sponsors';

  constructor(private http: HttpClient) { }

  getSponsors(): Observable<Sponsor[]> {
    return this.http.get<Sponsor[]>(this.apiUrl);
  }

  createSponsor(sponsor: Sponsor): Observable<Sponsor> {
    return this.http.post<Sponsor>(this.apiUrl, sponsor);
  }

  getSponsorById(id: string): Observable<Sponsor> {
    return this.http.get<Sponsor>(this.apiUrl + "/" + id)
  }

}
