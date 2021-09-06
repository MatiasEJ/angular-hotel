import { Component, OnInit } from '@angular/core';
import { Habitacion } from '../habitacion';
import { HabitacionesService } from '../habitaciones.service';
import { Tematica } from '../tematica';
import { TipoHabitacion } from '../tipo-hab';

@Component({
  selector: 'app-crear-habitaciones',
  templateUrl: './crear-habitaciones.component.html',
  styleUrls: ['./crear-habitaciones.component.css']
})
export class CrearHabitacionesComponent implements OnInit {

  TITULO: string = "Alta Habitacion";
  habitacion: Habitacion | undefined;
  tiposHabitacion: TipoHabitacion[] | undefined;
  tematicas: Tematica[] | undefined;

  constructor(private habitacionService: HabitacionesService) { }

  ngOnInit(): void {
    this.getTiposHabitacion();
    this.getTematicas();
  }

  getTiposHabitacion() {
    return this.habitacionService.getAllTipoHabitaciones().subscribe(response => this.tiposHabitacion = response);
  }

  getTematicas() {
    return this.habitacionService.getAllTematicas().subscribe(res => this.tematicas = res)
  }

  create() {
  }
  update() {
  }

}
