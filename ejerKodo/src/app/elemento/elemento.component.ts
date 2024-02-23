import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router, RouterLink,RouterOutlet } from '@angular/router';
import { ElementoService } from '../elemento.service';
@Component({
  selector: 'app-elemento',
  standalone: true,
  imports: [],
  templateUrl: './elemento.component.html',
  styleUrl: './elemento.component.css'
})
export class ElementoComponent {

  tipo: any;
  id:any;
  elemento: any;

  constructor(private activatedRoute: ActivatedRoute, private elementosService: ElementoService,private router:Router) {
    this.activatedRoute.paramMap.subscribe((parametros: ParamMap) => {
      this.tipo = this.activatedRoute.snapshot.url[0].path;
      this.id=this.activatedRoute.snapshot.url[1].path;
      this.elementosService.retornarElemento(this.tipo,this.id).subscribe(result => this.elemento = result);

    })
  }

}
