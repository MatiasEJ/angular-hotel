import { Component, OnInit } from '@angular/core';
import { Habitacion } from './habitacion';
import { HabitacionesService } from './habitaciones.service';

@Component({
  selector: 'app-habitaciones',
  templateUrl: './habitaciones.component.html',
  styleUrls: ['./habitaciones.component.css']
})
export class HabitacionesComponent implements OnInit {
  listaHabitaciones:Habitacion[]|undefined;

  constructor(private service:HabitacionesService) { }

  ngOnInit(): void {
    this.service.getListaHabitaciones().subscribe( listaHabitaciones => this.listaHabitaciones=listaHabitaciones);
  }


}
