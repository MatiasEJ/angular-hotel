import { TipoHab } from '../tipo-hab';

export class Single extends TipoHab{
  nombre:string = "Single";
  cantMaxHuespedes:number = 1;
  descripcion:string ="Habitacion Single";
}
