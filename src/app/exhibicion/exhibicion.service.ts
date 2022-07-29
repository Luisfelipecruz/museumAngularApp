import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { ExhibicionDetalle } from './exhibicionDetalle';
import { Artwork } from '../artwork/artwork'

@Injectable({
  providedIn: 'root',
})
export class ExhibicionService {
  private apiUrl: string = environment.baseUrlGrupo14 + 'museums';
  private apiUrlExhibitions: string = environment.baseUrlGrupo14 + 'exhibitions';

  constructor(private http: HttpClient) {}

  getExhibiciones(idMuseum: number): Observable<ExhibicionDetalle[]> {
    return this.http.get<ExhibicionDetalle[]>(
      `${this.apiUrl}/${idMuseum}/exhibitions`
    );
  }

  getExhibicionDetail(museumId:number, exhibicionId:number ){
    return this.http.get<ExhibicionDetalle>(
      `${this.apiUrl}/${museumId}/exhibitions/${exhibicionId}`
    );
  }

  createExhibicion(museumId:number,sponsorId:number,exhibicion: ExhibicionDetalle): Observable<ExhibicionDetalle> {
    exhibicion.sponsor.id = sponsorId;
    return this.http.post<ExhibicionDetalle>(`${this.apiUrl}/${museumId}/exhibitions`, exhibicion);
  }
  // {{protocol}}://{{host}}/api/museums/{{museum_id}}/exhibitions
  // "name": "Raphael",
  // "description": "One of the first-ever exhibitions to explore Raphael's complete career",
  // "sponsor": {
  //     "id": {{sponsor_id}}
  // }

  asignarObraParaExhibicion(exhibition_id:number,artwork_id_1:number): Observable<ExhibicionDetalle> {
    return this.http.post<ExhibicionDetalle>(`${this.apiUrlExhibitions}/${exhibition_id}/artworks/${artwork_id_1}/`, '');
  }
  // {{protocol}}://{{host}}/api/exhibitions/{{exhibition_id}}/artworks/{{artwork_id_1}}/


  getExhibicionArtwork(exhibitionId: number): Observable<Artwork[]>{
    return this.http.get<Artwork[]>(this.apiUrlExhibitions+"/"+exhibitionId+"/artworks/");
  }

}
