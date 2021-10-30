import { PrincipalComponent } from './principal/principal.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModificarComponent } from './componentes/aeropuerto/COMPONENTE/modificarAeropuerto/modificarAeropuerto.component';
import { AeropuertoComponent } from './componentes/aeropuerto/COMPONENTE/tablaAeropuerto.component';
import { AgregarComponent } from './componentes/aeropuerto/COMPONENTE/agregarAeropuerto/agregarAeropuerto.component';



const routes: Routes = [
  {path:'', redirectTo:'/inicio',pathMatch:'full'},
  {path:'inicio', component: PrincipalComponent},


  //aeropuertos
  {path:'agregarAeropuertos', component:AgregarComponent},
  {path:'modificarAeropuerto/:iataCode', component:ModificarComponent},
  {path:'listaAeropuertos', component:AeropuertoComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
