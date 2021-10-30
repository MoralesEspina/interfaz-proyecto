import { PrincipalComponent } from './principal/principal.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TablaVDisponibleComponent } from './componentes/tabla-vdisponible/tabla-vdisponible.component';
import { ModificarComponent } from './componentes/aeropuerto/COMPONENTE/modificarAeropuerto/modificarAeropuerto.component';
import { AeropuertoComponent } from './componentes/aeropuerto/COMPONENTE/tablaAeropuerto.component';
import { AgregarComponent } from './componentes/aeropuerto/COMPONENTE/agregarAeropuerto/agregarAeropuerto.component';
import { LoginComponent } from './componentes/public/login/login/login.component';
import { RegisterComponent } from './componentes/public/register/register.component';
import { RegisterUserComponent } from './componentes/public/register-user/register-user.component';

const routes: Routes = [
  {path:'', redirectTo:'/inicio',pathMatch:'full'},
  {path:'inicio', component: PrincipalComponent},
  {path: 'disponible', component: TablaVDisponibleComponent},
  {path:'agregarAeropuertos', component:AgregarComponent},
  {path:'modificarAeropuerto/:iataCode', component:ModificarComponent},
  {path:'listaAeropuertos', component:AeropuertoComponent},
  {path:'vuelos', component: MostrarTablaComponent},
  {path:'login', component: LoginComponent},
  {path:'register', component: RegisterComponent},
  {path:'register_user', component: RegisterUserComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
