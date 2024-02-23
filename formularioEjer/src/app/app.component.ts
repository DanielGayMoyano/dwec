import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { ValidacionesPropias } from './validaciones-propias';
import { ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
    formulario=new FormGroup({
      email:new FormControl('',[Validators.required, ValidacionesPropias.emailFormat]),
      emailRepeat:new FormControl('',[Validators.required, ValidacionesPropias.emailFormat]),
      password:new FormControl('',[Validators.required, ValidacionesPropias.passwordFormat]),
      passwordRepeat:new FormControl('',[Validators.required, ValidacionesPropias.passwordFormat])

      
    })
    submit(){
      alert("hola");
    }
}
