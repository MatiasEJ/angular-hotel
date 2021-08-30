import { Tematica } from './tematica';
import { TipoHab } from './tipo-hab';

export class Habitacion {
  id:number|undefined;
  nombre:string|undefined;
  numeroIden:string|undefined;
  tipoHab:TipoHab|undefined;
  tematica:Tematica|undefined;
  precioNoche:number|undefined;
}
