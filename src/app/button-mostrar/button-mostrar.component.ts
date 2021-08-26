import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-mostrar',
  templateUrl: './button-mostrar.component.html',
  styleUrls: ['./button-mostrar.component.css']
})
export class ButtonMostrarComponent implements OnInit {

  habilitar:boolean=true;

  constructor() { }

  ngOnInit(): void {
  }
  setHabilitarBotonMostrar():void {
    this.habilitar= (this.habilitar==true)?false:true;
  }
  setTextoBotonMostrar():string{
    return this.habilitar==true?"Ocultar":"Mostrar";
  }

}
