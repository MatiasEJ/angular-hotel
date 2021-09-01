import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  paginator: any;

  constructor(
    private empleadoService: EmpleadoService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      let page: number | undefined;
      if (typeof params.get('page') != 'undefined' && params.get('page')) {
        page = +params.get('page')!;
      }
      if (!page) {
        page = +0;
      }
      this.empleadoService.getEmpleados(page).subscribe((response) => {
        this.listaEmpleados = response.content as Empleado[];
        this.paginator = response;
      });
    });
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
          if (this.listaEmpleados) {
            this.listaEmpleados = this.listaEmpleados.filter(
              (empl) => empl !== empleado
            );
            Swal.fire('Deleted!', 'Your empleado has been deleted.', 'success');
          }
        });
      }
    });
  }
}
