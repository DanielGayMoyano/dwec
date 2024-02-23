import { Routes } from '@angular/router';
import { ContactoComponent } from './contacto/contacto.component';
import { AcercadeComponent } from './acercade/acercade.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { TablanroComponent } from './tablanro/tablanro.component';
import { Pagina404Component } from './pagina404/pagina404.component';
import { AmericaComponent } from './america/america.component';
import { ChileComponent } from './america/chile/chile.component';
import { ArgentinaComponent } from './america/argentina/argentina.component';
import { UruguayComponent } from './america/uruguay/uruguay.component';
import { EuropaComponent } from './europa/europa.component';
import { EspanaComponent } from './europa/espana/espana.component';
import { FranciaComponent } from './europa/francia/francia.component';
import { ItaliaComponent } from './europa/italia/italia.component';


export const routes: Routes = [
  {
    path: 'contacto',
    component: ContactoComponent
  },
  {
    path: 'acercade',
    component: AcercadeComponent
  },
  {
    path: 'empleados',
    component: EmpleadosComponent
  },
  {
    path:'tabla/:nro',
    component: TablanroComponent
  },
  {
    path: 'america',
    component: AmericaComponent,
    children: [
      {
        path: 'chile',
        component: ChileComponent
      },
      {
        path: 'argentina',
        component: ArgentinaComponent
      },
      {
        path: 'uruguay',
        component: UruguayComponent
      }
    ]
  },
  {
    path: 'europa',
    component: EuropaComponent,
    children: [
      {
        path: 'espana',
        component: EspanaComponent
      },
      {
        path: 'francia',
        component: FranciaComponent
      },
      {
        path: 'italia',
        component: ItaliaComponent
      }
    ]
  },
  {
    path: 'pagina404',
    component: Pagina404Component
  },
  {
    path:'**',
    redirectTo:'pagina404'
  }
];