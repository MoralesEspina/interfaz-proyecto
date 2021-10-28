import { PrincipalComponent } from './principal/principal.component';
import { MostrarTablaComponent } from './componentes/vuelo/mostrar-tabla/mostrar-tabla.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormcanvuelosComponent } from './componentes/canvuelo/formcanvuelos/formcanvuelos.component';
import { TablaCanvuelosComponent } from './componentes/canvuelo/tabla-canvuelos/tabla-canvuelos.component';



const routes: Routes = [
  {path:'', redirectTo:'/inicio',pathMatch:'full'},
  {path:'inicio', component: PrincipalComponent},

  {path:'vuelos', component: MostrarTablaComponent},

  {path:'cancelacion_vuelos', component: TablaCanvuelosComponent},
  {path:'addcancelacion_vuelos', component: FormcanvuelosComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
