import { Injectable } from '@angular/core';
import { Empleado } from './empleado';
import { EMPLEADOS } from './empleados.json';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  constructor() { }

  getEmpleados():Empleado[]{
      return EMPLEADOS;
  }
}
