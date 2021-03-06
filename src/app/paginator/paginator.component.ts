import { Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css'],
})
export class PaginatorComponent implements OnInit, OnChanges {
  @Input() paginator: any;
  paginas: number[] | undefined = [];

  desde: number | undefined;
  hasta: number | undefined;

  constructor() {}

  ngOnInit(): void {
    this.initPaginator()
  }

  ngOnChanges(changes: SimpleChanges): void {
    let paginadorActualizado = changes['paginator'];
    if(paginadorActualizado.previousValue){
      this.initPaginator();
    }

    
  }

  private initPaginator():void{
    this.desde = Math.min(Math.max(1,this.paginator.number-4),this.paginator.totalPages-5)
    this.hasta = Math.max(Math.min(this.paginator.totalPages,this.paginator.number+4),6)
    if (this.paginator.totalPages > 5) {
      this.paginas = new Array(this.hasta - this.desde +1)
        .fill(0)
        .map((valor, indice) => indice + this.desde!);
    } else {
      this.paginas = new Array(this.paginator.totalPages)
        .fill(0)
        .map((valor, indice) => indice + 1);
    }

  }



}
