import { MostrarPasajerosTablaComponent } from './componentes/vuelo/mostrar-pasajeros-tabla/mostrar-pasajeros-tabla.component';
import { PrincipalComponent } from './principal/principal.component';
import { MostrarTablaComponent } from './componentes/vuelo/mostrar-personas-tabla/mostrar-tabla.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path:'', redirectTo:'/inicio',pathMatch:'full'},
  {path:'inicio', component: PrincipalComponent},
  {path:'vuelo', component: MostrarTablaComponent},

  {path: 'agregar-personas', component: MostrarTablaComponent},

  {path:'pasajeros', component: MostrarPasajerosTablaComponent},
  {path: 'mostrar-pasajeros', component: MostrarPasajerosTablaComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
