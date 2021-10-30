import { VuelodComponent } from './vuelod/vuelod.component';
import { TablaVDisponibleComponent } from './tabla-vdisponible/tabla-vdisponible.component';
import { PrincipalComponent } from './principal/principal.component';
import { MostrarTablaComponent } from './componentes/vuelo/mostrar-tabla/mostrar-tabla.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', redirectTo:'/inicio',pathMatch:'full'},
  {path:'inicio', component: PrincipalComponent},
  {path:'vuelo', component: MostrarTablaComponent},
  {path: 'disponible', component: TablaVDisponibleComponent},
  {path: 'disponibles', component: VuelodComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
