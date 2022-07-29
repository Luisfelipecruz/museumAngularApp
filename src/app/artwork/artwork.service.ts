import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { empty, Observable } from 'rxjs';

import { Artwork } from './artwork';
import { Image } from './image';

@Injectable({ providedIn: 'root' })
export class ArtworkService {
  private apiUrlExhibicionesArtwork: string = environment.baseUrlGrupo14 + 'exhibitions/100/artworks/';
  private apiUrlArtwork: string = environment.baseUrlGrupo14 + 'artworks';
  private apiUrlCreateArtwork: string = environment.baseUrlGrupo14 + 'artists/';
  private apiUrlCreateImage: string = environment.baseUrlGrupo14 + 'artists/';

  constructor(private http: HttpClient) { }

  getArtworks(): Observable<Artwork[]> {
    return this.http.get<Artwork[]>(this.apiUrlArtwork + "/");;
  }

  getArtworkById(id: string): Observable<Artwork> {
    return this.http.get<Artwork>(this.apiUrlArtwork + "/" + id)
  }

  getArtworksExhibiciones(): Observable<Artwork[]> {
    return this.http.get<Artwork[]>(this.apiUrlExhibicionesArtwork);
  }

  createArtwork(artwork: Artwork, idArtist: number): Observable<Artwork> {
    return this.http.post<Artwork>(this.apiUrlCreateArtwork + idArtist + '/artworks', artwork);
  }

  createImageArtwork(image: Image, idArtwork: number): Observable<Image> {
    console.log(image);
    return this.http.post<Image>(this.apiUrlCreateImage + idArtwork + '/artworks', image);
  }
}
