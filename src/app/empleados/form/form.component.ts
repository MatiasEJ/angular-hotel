import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado';
import { EmpleadoService } from '../empleado.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  TITULO: string = 'Alta Cliente';
  empleado: Empleado = new Empleado();

  constructor(private service: EmpleadoService,private router:Router) {}

  ngOnInit(): void {}

  public create(): void {
    this.service.create(this.empleado).subscribe(
      () => this.router.navigate(['/empleados'])
    );
    console.log(this.empleado);
  }

}
