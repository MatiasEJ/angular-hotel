import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { Empleado } from './empleado';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UrlEndPoints } from '../util/endPoints';
import { catchError, map } from 'rxjs/operators';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class EmpleadoService {
  private httpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  });

  constructor(private http: HttpClient, private router: Router) {}

  getEmpleados(): Observable<Empleado[]> {
    return this.http.get<Empleado[]>(UrlEndPoints.EMPLEADOS);
  }

  create(empleado: Empleado): Observable<Empleado> {
    return this.http
      .post(UrlEndPoints.EMPLEADO, empleado, {
        headers: this.httpHeaders,
      })
      .pipe(
        map((res: any) => res.empleado as Empleado),
        catchError((e) => {
          if (e.status == 400) {
            return throwError(e);
          }

          console.log(e.error.mensaje);
          Swal.fire(e.error.mensaje, e.error.error, 'error');
          return throwError(e);
        })
      );
  }

  getEmpleadoById(id: number | undefined): Observable<Empleado> {
    return this.http.get<Empleado>(`${UrlEndPoints.EMPLEADO_ID}${id}`).pipe(
      catchError((e) => {
        console.log(e.error.mensaje);
        Swal.fire('Error al obtenerEmpleado', e.error.mensaje, 'error');
        this.router.navigate(['/empleados']);
        return throwError(e);
      })
    );
  }

  update(empleado: Empleado): Observable<any> {
    return this.http
      .put<any>(`${UrlEndPoints.EMPLEADO_ID}${empleado.id}`, empleado, {
        headers: this.httpHeaders,
      })
      .pipe(
        catchError((e) => {
          console.log(e.error.mensaje);
          Swal.fire('Error al editar empleado', e.error.mensaje, 'error');
          return throwError(e);
        })
      );
  }

  delete(id: number | undefined): Observable<Empleado> {
    return this.http
      .delete<Empleado>(`${UrlEndPoints.EMPLEADO_ID}${id}`, {
        headers: this.httpHeaders,
      })
      .pipe(
        catchError((e) => {
          console.log(e.error.mensaje);
          Swal.fire('Error al borrar empleado', e.error.mensaje, 'error');
          return throwError(e);
        })
      );
  }
}
