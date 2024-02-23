import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { ElementoService } from './elemento.service';
import { DestacadoComponent } from './destacado/destacado.component';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink,  DestacadoComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  elementos:any;

  constructor(private elementosService: ElementoService){
    
  }
  
  
}
