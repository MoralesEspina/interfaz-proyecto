import { PagosComponent } from './componentes/pagos/pagos/pagos.component';
import { PrincipalComponent } from './principal/principal.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearRutasComponent } from './componentes/rutas/crear-rutas/crear-rutas.component';

const routes: Routes = [
  {path:'', redirectTo:'/inicio',pathMatch:'full'},
  {path:'inicio', component: PrincipalComponent},
  {path:'vuelo', component: PagosComponent},
  {path: 'disponible', component: CrearRutasComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
