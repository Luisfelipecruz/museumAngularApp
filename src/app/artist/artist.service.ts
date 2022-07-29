import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ArtistDetail } from './artist-detail';
import { environment } from 'src/environments/environment';
// 12.
import { Artist } from './artist';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  private apiUrl: string = environment.baseUrlGrupo14 + 'artists';

  constructor(private http: HttpClient) { }

  getArtists(): Observable<ArtistDetail[]> {
    return this.http.get<ArtistDetail[]>(this.apiUrl);
  }

  getArtist(id: string): Observable<ArtistDetail> {
    return this.http.get<ArtistDetail>(this.apiUrl + "/" + id);
  }

  // 12. Crear el método
  createArtist(artist: Artist): Observable<Artist> {
    return this.http.post<Artist>(this.apiUrl, artist);
  }


}

// 8. Servicio artist -> Crear artist-detail
