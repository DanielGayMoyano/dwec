import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  nombre = ''

  fijarNombre1() {
    this.nombre = 'Juan';
  }

  fijarNombre2() {
    this.nombre = 'Ana';
  }


  // contador = 1;
  // incrementar(){
  //   this.contador++;
  // }
  // decrementar(){
  //   this.contador--;
  // }




  // nombre='Gay Daniel';
  // edad=25;
  // email='gdaniel@gmail.com';
  // sueldos=[1700,1600,1900];
  // activo=true;
  // sitio='https://www.google.com';

  // articulos = [{
  //   codigo: 1,
  //   descripcion: 'naranjas',
  //   precio: 540
  // },{
  //   codigo: 2,
  //   descripcion: 'manzanas',
  //   precio: 900
  // },{
  //   codigo: 3,
  //   descripcion: 'peras',
  //   precio: 490
  // }];

  // generarNumero() {
  //   return Math.floor(Math.random() * 3) + 1;
  // }


  // esActivo(){
  //   if(this.activo)
  //     return 'trabajador activo';
  //   else
  //     return 'trabajador inactivo';
  // }

  // ultimos3Sueldos(){
  //   let suma=0;
  //   for(let i=0;i<this.sueldos.length;i++)
  //     suma+=this.sueldos[i];
  //   return suma;
  // }
}
