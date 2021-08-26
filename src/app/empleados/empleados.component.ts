import { Component, OnInit } from '@angular/core';
import { Empleado } from './empleado';
import { EmpleadoService } from './empleado.service';
import { EMPLEADOS } from './empleados.json';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {

  listaEmpleados:Empleado[] | undefined;
 
  constructor(private empleadoService:EmpleadoService) {
  }

  ngOnInit(): void {
    this.listaEmpleados = this.empleadoService.getEmpleados();
  }

}
