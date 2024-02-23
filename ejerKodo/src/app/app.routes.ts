import { Routes } from '@angular/router';
import { ListElementosComponent } from './list-elementos/list-elementos.component';


export const routes: Routes = [
    {
        path:'peliculas',
        component: ListElementosComponent
    },
    {
        path:'series',
        component: ListElementosComponent
    },
    {
        path:'juegos',
        component: ListElementosComponent
    }
];
