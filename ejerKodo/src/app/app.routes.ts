import { Routes } from '@angular/router';
import { ListElementosComponent } from './list-elementos/list-elementos.component';
import { ElementoComponent } from './elemento/elemento.component';


export const routes: Routes = [
    {
        path:'peliculas',
        component: ListElementosComponent
    },
    {
        path:'peliculas/:id',
        component: ElementoComponent
    },
    {
        path:'series/:id',
        component: ElementoComponent
    },
    {
        path:'juegos/:id',
        component: ElementoComponent
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
