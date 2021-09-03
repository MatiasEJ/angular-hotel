import { HttpEventType } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { Empleado } from '../empleado';
import { EmpleadoService } from '../empleado.service';
import { ModalService } from './modal.service';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css'],
})
export class DetallesComponent implements OnInit {
  @Input() empleado: Empleado | undefined;
  private _progreso:number = 0;
  private _fotoSeleccionada: File | undefined;
  titulo:string = "Detalles";

  constructor(
    private empleadoService: EmpleadoService,
    private activatedRoute: ActivatedRoute,
    private _modalService: ModalService
  ) {}

  ngOnInit(): void {
  }
  public get progreso():number{
    return this._progreso;
  }
  public get fotoSeleccionada():File|undefined{
    return this._fotoSeleccionada;
  }
  public get modalService(){
    return this._modalService;
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

  cerrarModal(){
    this._modalService.cerrarModal(); 
    this._progreso = 0;
  }

  upload(): void {
    if(!(this._fotoSeleccionada) || typeof this._fotoSeleccionada== 'undefined' ){
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
