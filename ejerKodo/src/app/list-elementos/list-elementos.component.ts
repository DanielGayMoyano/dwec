import { Component, QueryList } from '@angular/core';
import { ElementoService } from '../elemento.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { RouterLink,RouterOutlet } from '@angular/router';
import { Elemento } from '../elemento';

@Component({
  selector: 'app-list-elementos',
  standalone: true,
  imports: [],
  templateUrl: './list-elementos.component.html',
  styleUrl: './list-elementos.component.css'
})
export class ListElementosComponent {
  tipo: any;
  elementos: any;
  constructor(private activatedRoute: ActivatedRoute, private elementosService: ElementoService) {
    this.activatedRoute.paramMap.subscribe((parametros: ParamMap) => {
      this.tipo = this.activatedRoute.snapshot.url[0].path;
      this.elementosService.retornarElementos(this.tipo).subscribe(result => this.elementos = result);

    })
  }
  getElemento(tipo: string,id:number): any {
    console.log(tipo+"-"+id);
    
  }


}
