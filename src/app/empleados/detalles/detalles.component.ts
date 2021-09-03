import { HttpEventType } from '@angular/common/http';
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
  private _progreso:number = 0;
  private _fotoSeleccionada: File | undefined;

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
  public get progreso():number{
    return this._progreso;
  }
  public get fotoSeleccionada():File|undefined{
    return this._fotoSeleccionada;
  }

  seleccionarFoto(event: any): void {
    this._fotoSeleccionada = event.target.files[0];
    this._progreso = 0;
    console.log(this._fotoSeleccionada);
    console.log(this.empleado);
    if(this._fotoSeleccionada!.type.indexOf('image')<0 ){
        Swal.fire("Debe seleccionar una imagen", 'error');
        event.target.value = null
    }
    
  }

  upload(): void {
    if(!(this._fotoSeleccionada)){
        Swal.fire("Debe seleccionar una foto", 'error');
    }else{
    this.empleadoService
      .uploadFoto(this._fotoSeleccionada, this.empleado?.id )
      .subscribe((event) => {
        if(event.type === HttpEventType.UploadProgress){
          if(event.total){
            this._progreso = Math.round((event.loaded/(event.total))*100)
          }
        }else if(event.type ===  HttpEventType.Response){
          let response:any = event.body;
          this.empleado = response.empleado as Empleado;
        Swal.fire("Imagen subida con exito.", 'success');
        }
        // console.log(empleado)
        // this.empleado = empleado;
      });
    }
  }
}
