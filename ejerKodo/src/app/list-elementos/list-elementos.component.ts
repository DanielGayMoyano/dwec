import { Component, QueryList } from '@angular/core';
import { ElementoService } from '../elemento.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import {MatCardModule} from '@angular/material/card';



@Component({
  selector: 'app-list-elementos',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './list-elementos.component.html',
  styleUrl: './list-elementos.component.css'
})
export class ListElementosComponent {
  tipo: any;
  elementos: any;
  
  constructor(private activatedRoute: ActivatedRoute, private elementosService: ElementoService,private router:Router) {
    this.activatedRoute.paramMap.subscribe((parametros: ParamMap) => {
      this.tipo = this.activatedRoute.snapshot.url[0].path;
      this.elementosService.retornarElementos(this.tipo).subscribe(result => this.elementos = result);

    })
  }
  getElemento(tipo: string, id: number): any {
    //console.log(this.activatedRoute.snapshot.url[0]);
    this.router.navigateByUrl(this.tipo+"/"+id);  

  }


}
