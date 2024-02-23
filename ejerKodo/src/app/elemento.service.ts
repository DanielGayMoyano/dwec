import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ElementoService {

  urlPeliculas = 'http://localhost:3000/peliculas';
  urlSeries = 'http://localhost:3000/series';
  urlJuegos = 'http://localhost:3000/juegos';
  constructor(private http: HttpClient) { }

  retornarElementos(tipo: string) {
    if (tipo === "peliculas") {
      return this.http.get(this.urlPeliculas);
    } else if (tipo === "series") {
      return this.http.get(this.urlSeries);
    } else {
      return this.http.get(this.urlJuegos)
    }
  }
  retornarElemento(tipo: string, id: number) {
    if (tipo === "peliculas") {
      return this.http.get(this.urlPeliculas + "/" + id);
    } else if (tipo === "series") {
      return this.http.get(this.urlSeries + "/" + id);
    }else {
      return this.http.get(this.urlJuegos + "/" + id);
    }
  }

}
