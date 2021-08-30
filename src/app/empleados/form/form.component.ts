import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado';
import { EmpleadoService } from '../empleado.service';
import { Router, ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  private _TITULO: string = 'Alta Empleado';
  public get TITULO(): string {
    return this._TITULO;
  }
 
  private _empleado: Empleado = new Empleado();
  public get empleado(): Empleado {
    return this._empleado;
  }
  private _listErrors: string[] | undefined;
  public get listErrors(): string[] | undefined {
    return this._listErrors;
  }

  constructor(
    private service: EmpleadoService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.cargarEmpleado();
  }

  private cargarEmpleado(): void {
    this.activatedRoute.params.subscribe((params) => {
      let id = params['id'];
      if (id) {
        this.service
          .getEmpleadoById(id)
          .subscribe((empleado) => (this._empleado = empleado));
      }
    });
  }

  public create(): void {
    this.service.create(this._empleado).subscribe(
      (empleado) => {
        this.router.navigate(['/empleados']);
        swal.fire(
          'Empleado guardado.',
          `${empleado.nombre} creado con exito.`,
          'success'
        );
      },
      (err) => {this._listErrors = err.error.errors as string[];
      console.log(err.error.error);}
    );
    console.log(this._empleado);
  }

  public update(): void {
    this.service.update(this._empleado).subscribe((json) => {
      this.router.navigate(['/empleados']);
      swal.fire(
        'Empleado actualizado.',
        `${json.mensaje}${json.empleado.nombre}`,
        'success'
      );
    },
      (err) => {this._listErrors = err.error.errors as string[];
      console.log(err.error.error);});
  }
}
