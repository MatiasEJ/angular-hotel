import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  TITULO: string = "Alta Cliente";
  private empleado: Empleado = new Empleado();

  constructor() { }

  ngOnInit(): void {
  }

  public create():void{

      console.log("clickeado");
      console.log(this.empleado);
  }

}
