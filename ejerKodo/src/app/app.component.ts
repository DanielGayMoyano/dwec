import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { ElementoService } from './elemento.service';
import { DestacadoComponent } from './destacado/destacado.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink,  DestacadoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  elementos:any;

  constructor(private elementosService: ElementoService){
    
  }
  
  
}
