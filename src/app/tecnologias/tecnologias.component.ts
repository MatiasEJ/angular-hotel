import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tecnologias',
  templateUrl: './tecnologias.component.html',
  styleUrls: ['./tecnologias.component.css']
})
export class TecnologiasComponent implements OnInit {
  
  listaTecnologias:string[] = ['Angular','Java','Springboot'];
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
