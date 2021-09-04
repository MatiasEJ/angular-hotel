import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  modal:boolean = false;

  private _notificarUpload= new EventEmitter<any>();

  constructor() { }

  abrirModal():void{
    this.modal = true;
  }
  cerrarModal():void{
    this.modal = false;
  }

  public get notificarUpload():EventEmitter<any>{
    return this._notificarUpload;
  }

}
