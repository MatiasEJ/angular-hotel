import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { Empleado } from '../empleado';
import { EmpleadoService } from '../empleado.service';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css'],
})
export class DetallesComponent implements OnInit {
  empleado: Empleado | undefined;
  private fotoSeleccionada: File | undefined;

  constructor(
    private empleadoService: EmpleadoService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      let id: number | undefined;
      if (typeof params.get('id') != 'undefined' && params.get('id')) {
        id = +params.get('id')!;
      }
        this.empleadoService
          .getEmpleadoById(id)
          .subscribe((empleado) => (this.empleado = empleado));
      
    });
  }
  seleccionarFoto(event: any): void {
    this.fotoSeleccionada = event.target.files[0];
    console.log(this.fotoSeleccionada);
    console.log(this.empleado);
  }

  upload(): void {
    this.empleadoService
      .uploadFoto(this.fotoSeleccionada!, this.empleado?.id)
      .subscribe((empleado) => {
        console.log(empleado)
        this.empleado = empleado;
        Swal.fire("Imagen subida con exito.", 'success');
      });
  }
}
