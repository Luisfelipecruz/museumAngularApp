import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MovementDetail } from './movement-detail';
import { environment } from 'src/environments/environment';
// 12.
import { Movement } from './movement';

@Injectable({
  providedIn: 'root'
})
export class MovementService {

  private apiUrl: string = environment.baseUrlGrupo14 + 'movements';

  constructor(private http: HttpClient) { }

  getMovements(): Observable<MovementDetail[]> {
    return this.http.get<MovementDetail[]>(this.apiUrl);
  }

  getMovement(id: string): Observable<MovementDetail> {
    return this.http.get<MovementDetail>(this.apiUrl + "/" + id);
  }

  // 12. Crear el método
  createMovement(movement: Movement): Observable<Movement> {
    return this.http.post<Movement>(this.apiUrl, movement);
  }


}

// 8. Servicio movement -> Crear movement-detail
