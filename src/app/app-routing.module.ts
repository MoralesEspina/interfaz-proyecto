import { RegisterUserComponent } from './componentes/public/register-user/register-user.component';
import { PrincipalComponent } from './principal/principal.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componentes/public/login/login/login.component';
import { RegisterComponent } from './componentes/public/register/register.component';
import { TablaVDisponibleComponent } from './componentes/public/tabla-vdisponible/tabla-vdisponible.component';
import { AgregarComponent } from './componentes/private/aeropuerto/COMPONENTE/agregarAeropuerto/agregarAeropuerto.component';
import { ModificarComponent } from './componentes/private/aeropuerto/COMPONENTE/modificarAeropuerto/modificarAeropuerto.component';
import { AeropuertoComponent } from './componentes/private/aeropuerto/COMPONENTE/tablaAeropuerto.component';
import { MostrarTablaComponent } from './componentes/public/vuelo/mostrar-personas-tabla/mostrar-tabla.component';
import { MostrarPasajerosTablaComponent } from './componentes/public/vuelo/mostrar-pasajeros-tabla/mostrar-pasajeros-tabla.component';

const routes: Routes = [
  {path:'', redirectTo:'/inicio',pathMatch:'full'},
  {path:'inicio', component: PrincipalComponent},
  {path:'disponible', component: TablaVDisponibleComponent},
  {path:'agregarAeropuertos', component:AgregarComponent},
  {path:'modificarAeropuerto/:iataCode', component:ModificarComponent},
  {path:'listaAeropuertos', component:AeropuertoComponent},
  {path:'login', component: LoginComponent},
  {path:'register', component: RegisterComponent},
  {path:'vuelo', component: MostrarTablaComponent},
  {path:'agregar-personas', component: MostrarTablaComponent},
  {path:'pasajeros', component: MostrarPasajerosTablaComponent},
  {path:'mostrar-pasajeros', component: MostrarPasajerosTablaComponent},
  {path:'register_user', component: RegisterUserComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
