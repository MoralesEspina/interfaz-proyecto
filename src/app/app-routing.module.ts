import { PrincipalComponent } from './principal/principal.component';
import { MostrarTablaComponent } from './componentes/vuelo/mostrar-tabla/mostrar-tabla.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarComponent } from './aeropuerto/COMPONENTE/agregar/agregar.component';
import { ModificarComponent } from './aeropuerto/COMPONENTE/modificar/modificar.component';
import { AeropuertoComponent } from './aeropuerto/aeropuerto.component';

const routes: Routes = [
  {path:'', redirectTo:'/inicio',pathMatch:'full'},
  {path:'inicio', component: PrincipalComponent},
  {path:'vuelo', component: MostrarTablaComponent},


  //aeropuertos
  {path:'listaaeropuerto', component:AgregarComponent},
  {path:'modificar/:iataCode', component:ModificarComponent},
  {path:'agregaraeropuerto', component:AeropuertoComponent},
  

  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
