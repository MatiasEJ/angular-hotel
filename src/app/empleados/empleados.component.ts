import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Empleado } from './empleado';
import { EmpleadoService } from './empleado.service';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css'],
})
export class EmpleadosComponent implements OnInit {
  listaEmpleados: Empleado[] | undefined;

  constructor(private empleadoService: EmpleadoService) {}

  ngOnInit(): void {
    this.empleadoService
      .getEmpleados()
      .subscribe((empleados) => (this.listaEmpleados = empleados));
  }

  delete(empleado: Empleado): void {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.empleadoService.delete(empleado.id).subscribe((res) => {
          Swal.fire('Deleted!', 'Your empleado has been deleted.', 'success');
        });
      }
    });
  }
}
