import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ElementoService } from '../elemento.service';

@Component({
  selector: 'app-destacado',
  standalone: true,
  imports: [],
  templateUrl: './destacado.component.html',
  styleUrl: './destacado.component.css'
})
export class DestacadoComponent {
  opciones = ["peliculas", "series", "juegos"];
  tipo: any;
  elemento: any;
  opcionAleatoria: any;
  idAleatorio: any;
  constructor(private activatedRoute: ActivatedRoute, private elementosService: ElementoService) {
    this.activatedRoute.paramMap.subscribe((parametros: ParamMap) => {
      this.opcionAleatoria = this.opciones[this.getRandomNumber(0, this.opciones.length - 1)];
      this.idAleatorio = this.getRandomNumber(1, 6);
      this.elementosService.retornarElemento(this.opcionAleatoria, this.idAleatorio).subscribe(result => this.elemento = result);
      console.log(this.elemento);
    })
  }

  getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
