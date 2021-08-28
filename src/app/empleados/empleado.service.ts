import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Empleado } from './empleado';
import {HttpClient} from '@angular/common/http';
import { UrlEndPoints } from '../util/endPoints';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  private urlEndPoint:string = UrlEndPoints.empleados;

  constructor(private http: HttpClient) { }
  
  getEmpleados():Observable<Empleado[]>{
      return this.http.get<Empleado[]>(this.urlEndPoint); 
  }
}
