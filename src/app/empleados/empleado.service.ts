import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Empleado } from './empleado';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UrlEndPoints } from '../util/endPoints';

@Injectable({
  providedIn: 'root',
})
export class EmpleadoService {

  private httpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin':'*'
  });

  constructor(private http: HttpClient) {}

  getEmpleados(): Observable<Empleado[]> {
    return this.http.get<Empleado[]>(UrlEndPoints.empleados);
  }

  create(empleado: Empleado): Observable<Empleado> {
    return this.http.post<Empleado>(UrlEndPoints.empleado, empleado, {
      headers: this.httpHeaders,
    });
  }
}
