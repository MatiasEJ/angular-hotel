import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Empleado } from './empleado';
import { EMPLEADOS } from './empleados.json';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  constructor(private http: HttpClient) { }
  
  getEmpleados():Observable<Empleado[]>{
      return of(EMPLEADOS);
  }
}
