import { Component } from '@angular/core';
import { Input } from '@angular/core';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  usuario: any = localStorage.getItem('user');
  logoUser:string="./assets/logotipoKODO.jpg";
  logoAnonimo:string="./assets/guest.webp";
  constructor() {
    
  }
}