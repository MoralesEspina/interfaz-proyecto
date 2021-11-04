

import { PagosComponent } from './componentes/pagos/pagos/pagos.component';


import { RoleGuardGuard } from './Guards/role-guard.guard';

import { PrincipalComponent } from './principal/principal.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearRutasComponent } from './componentes/rutas/crear-rutas/crear-rutas.component';

//Imports Seleccion de Vuelos
import { TablaVDisponibleComponent } from './componentes/public/tabla-vdisponible/tabla-vdisponible.component';

//Imports Pasajeros
import { MostrarTablaComponent } from './componentes/public/vuelo/mostrar-tabla.component';

//Imports Aeropuertos
import { AgregarAeropuertoComponent } from './componentes/private/aeropuerto/agregarAeropuerto/agregarAeropuerto.component';
import { TablaAeropuertoComponent } from './componentes/private/aeropuerto/tablaAeropuerto/tablaAeropuerto.component';

//Imports Login
import { LoginComponent } from './componentes/public/login/login.component';
import { RegisterUserComponent } from './componentes/public/register-user/register-user.component';


//Imports Modelo de Avión
import { AgregarModeloavionComponent } from './componentes/private/modeloavion/agregarModeloavion/agregar-modeloavion.component';
import { TablaModeloavionComponent } from './componentes/private/modeloavion/tablaModeloavion/tabla-modelo.component';

//Imports Cancelacion de Vuelos
import { TablaCanvuelosComponent } from './componentes/private/canvuelo/tablaCanvuelos/tablaCanvuelos.component';
import { FormcanvuelosComponent } from './componentes/private/canvuelo/agregarCanvuelos/agregarCanvuelos.component';
import { FormularioEditcanvuelosComponent } from './componentes/private/canvuelo/editarCanvuelos/editarCanvuelos.component';

//Imports Aerolineas
import { AgregarAerolineaComponent } from './componentes/private/aerolinea/agregarAerolinea/agregar-aerolinea.component';
import { TablaAerolineaComponent } from './componentes/private/aerolinea/tablaAerolinea/tabla-aerolinea.component';

//Imports Mant Vuelos
import { MostrarvueloComponent } from './componentes/private/vuelos/mostrarvuelo/mostrarvuelo.component';
import { CrearvueloComponent } from './componentes/private/vuelos/crearvuelo/crearvuelo.component';
import { AuthGuard } from './Guards/auth.guard';

const routes: Routes = [

  //Direcciones Inicio
  {path:'', redirectTo:'/inicio',pathMatch:'full'},
  {path:'inicio', component: PrincipalComponent},

  {path:'vuelo', component: PagosComponent},
  {path: 'disponible', component: CrearRutasComponent},


  //Direcciones Seleccion de Vuelos
  {path:'disponible', component: TablaVDisponibleComponent},

  //Direcciones Aeropuertos
  {path:'agregarAeropuertos', component:AgregarAeropuertoComponent, canActivate:[AuthGuard]},
  {path:'modificarAeropuertos/:iataCode', component:AgregarAeropuertoComponent, canActivate:[AuthGuard]},
  {path:'listaAeropuertos', component:TablaAeropuertoComponent, canActivate:[AuthGuard]},

  //Direcciones Login
  {path:'login', component: LoginComponent},
  {path:'register_user', component: RegisterUserComponent},

  //Direcciones Pasajeros
  {path:'vuelo', component: MostrarTablaComponent},
  {path:'agregar-personas', component: MostrarTablaComponent},

  //Direcciones Modelo de Avion
  {path: 'tablamodelo',component:TablaModeloavionComponent, canActivate:[AuthGuard]},
  {path: 'agregarmodelo',component:AgregarModeloavionComponent, canActivate:[AuthGuard]},
  {path: 'modificarmodelo/:id_modelo',component:AgregarModeloavionComponent, canActivate:[AuthGuard]},

  //Direcciones Cancelacion de Vuelos
  {path:'cancelacion_vuelos', component: TablaCanvuelosComponent, canActivate:[AuthGuard]},
  {path:'addcancelacion_vuelos', component: FormcanvuelosComponent, canActivate:[AuthGuard]},
  {path:'editcancelacion_vuelos/:id_cancelacion_vuelos', component: FormularioEditcanvuelosComponent, canActivate:[AuthGuard]},


  //Direcciones Aerolineas
  {path: 'tablaAerolinea', component:TablaAerolineaComponent, canActivate:[AuthGuard]},
  {path: 'agregarAerolinea', component:AgregarAerolineaComponent, canActivate:[AuthGuard]},
  {path: 'edit/:id_aerolinea', component:AgregarAerolineaComponent, canActivate:[AuthGuard]},

  //Direcciones Vuelos
  {path:'crudVuelo', component: MostrarvueloComponent, canActivate:[AuthGuard]},
  {path:'agregarVuelo', component: CrearvueloComponent, canActivate:[AuthGuard]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
