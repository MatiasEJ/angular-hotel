import { Tematica } from './tematica';
import { TipoHabitacion } from './tipo-hab';

export class Habitacion {
  id:number|undefined;
  nombre:string|undefined;
  num_id:string|undefined;
  tipo_hab:TipoHabitacion|undefined;
  tematica:Tematica|undefined;
  precio_noche:number|undefined;
}
