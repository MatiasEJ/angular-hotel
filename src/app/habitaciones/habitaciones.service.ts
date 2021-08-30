import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable} from 'rxjs';
import { UrlEndPoints } from '../util/endPoints';
import { Habitacion } from './habitacion';

@Injectable({
  providedIn: 'root',
})
export class HabitacionesService {
  private httpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  });

  constructor(private http: HttpClient, private router: Router) {}

  getListaHabitaciones(): Observable<Habitacion[]> {
    return this.http.get<Habitacion[]>(UrlEndPoints.LISTAHABITACIONES);
  }
}
