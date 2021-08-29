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
    return this.http.get<Empleado[]>(UrlEndPoints.EMPLEADOS);
  }

  create(empleado: Empleado): Observable<Empleado> {
    return this.http.post<Empleado>(UrlEndPoints.EMPLEADO, empleado, {
      headers: this.httpHeaders,
    });
  }

  getEmpleado(id:number| undefined): Observable<Empleado> {
    return this.http.get<Empleado>(`${UrlEndPoints.EMPLEADO_ID}${id}`);
  }

  update(empleado:Empleado):Observable<Empleado>{
    return this.http.put<Empleado>(`${UrlEndPoints.EMPLEADO_ID}${empleado.id}`,empleado,{headers: this.httpHeaders});

  }

  delete(id:number | undefined):Observable<Empleado>{
    return this.http.delete<Empleado>(`${UrlEndPoints.EMPLEADO_ID}${id}`,{headers: this.httpHeaders});
  }




  
  
}
