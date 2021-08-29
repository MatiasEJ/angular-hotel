import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado';
import { EmpleadoService } from '../empleado.service';
import {Router,ActivatedRoute} from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  TITULO: string = 'Alta Empleado';
  empleado: Empleado = new Empleado();

  constructor(private service: EmpleadoService,
    private router:Router, 
    private activatedRoute:ActivatedRoute) {}

  ngOnInit(): void {
    this.cargarEmpleado();
  }

  private cargarEmpleado():void{
    this.activatedRoute.params.subscribe(params =>{
      let id = params['id'];
      if(id){
        this.service.getEmpleadoById(id).subscribe( empleado => this.empleado = empleado);
      }

    })
  }

  public create(): void {
    this.service.create(this.empleado).subscribe(
      (empleado) => {
        this.router.navigate(['/empleados']);
        swal.fire('Empleado guardado.',`${empleado.nombre} creado con exito.`,'success');
      }
    );
    console.log(this.empleado);
  }

  public update():void{
    this.service.update(this.empleado).subscribe(json => {
      this.router.navigate(['/empleados']);
      swal.fire('Empleado actualizado.',`${json.mensaje}${json.empleado.nombre}`,'success' );
    });
  }



}
