import { Component, OnInit } from '@angular/core';
import { Empleado } from './empleado';
import { EmpleadoService } from './empleado.service';

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
    this.empleadoService.getEmpleados().subscribe(
      empleados => this.listaEmpleados = empleados
    );
  }

}
