import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Museum } from './museum';

@Injectable({
  providedIn: 'root',
})
export class MuseumService {
  private apiUrl: string = environment.baseUrlGrupo14 + 'museums';

  constructor(private http: HttpClient) {}

  getMuseums(): Observable<Museum[]> {
    return this.http.get<Museum[]>(this.apiUrl);
  }

  createMuseum(museum: Museum): Observable<Museum> {
    return this.http.post<Museum>(this.apiUrl, museum);
  }

  getMuseumById(id: string): Observable<Museum> {
    return this.http.get<Museum>(this.apiUrl +"/"+id)
  }
  
}
