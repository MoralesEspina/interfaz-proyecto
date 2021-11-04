import { PrincipalComponent } from './principal/principal.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Imports Seleccion de Vuelos
import { TablaVDisponibleComponent } from './componentes/public/tabla-vdisponible/tabla-vdisponible.component';

//Imports Pasajeros
import { MostrarTablaComponent } from './componentes/public/vuelo/mostrar-tabla.component';

//Imports Aeropuertos
import { AgregarAeropuertoComponent } from './componentes/private/aeropuerto/agregarAeropuerto/agregarAeropuerto.component';
import { TablaAeropuertoComponent } from './componentes/private/aeropuerto/tablaAeropuerto/tablaAeropuerto.component';

//Imports Login
import { LoginComponent } from './componentes/public/login/login.component';
import { RegisterComponent } from './componentes/public/register/register.component';
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

const routes: Routes = [

  //Direcciones Inicio
  {path:'', redirectTo:'/inicio',pathMatch:'full'},
  {path:'inicio', component: PrincipalComponent},

  //Direcciones Seleccion de Vuelos
  {path:'disponible', component: TablaVDisponibleComponent},

  //Direcciones Aeropuertos
  {path:'agregarAeropuertos', component:AgregarAeropuertoComponent},
  {path:'modificarAeropuertos/:iataCode', component:AgregarAeropuertoComponent},
  {path:'listaAeropuertos', component:TablaAeropuertoComponent},

  //Direcciones Login
  {path:'login', component: LoginComponent},
  {path:'register', component: RegisterComponent},
  {path:'register_user', component: RegisterUserComponent},

  //Direcciones Pasajeros
  {path:'vuelo', component: MostrarTablaComponent},
  {path:'agregar-personas', component: MostrarTablaComponent},

  //Direcciones Modelo de Avion
  {path: 'tablamodelo',component:TablaModeloavionComponent},
  {path: 'agregarmodelo',component:AgregarModeloavionComponent},
  {path: 'modificarmodelo/:id_modelo',component:AgregarModeloavionComponent},

  //Direcciones Cancelacion de Boletos
  {path:'cancelacion_vuelos', component: TablaCanvuelosComponent},
  {path:'addcancelacion_vuelos', component: FormcanvuelosComponent},
  {path:'editcancelacion_vuelos/:id_cancelacion_vuelos', component: FormularioEditcanvuelosComponent},

  //Direcciones Aerolineas
  {path: 'tablaAerolinea', component:TablaAerolineaComponent},
  {path: 'agregarAerolinea', component:AgregarAerolineaComponent},
  {path: 'edit/:id_aerolinea', component:AgregarAerolineaComponent},

  //Direcciones Vuelos
  {path:'crudVuelo', component: MostrarvueloComponent},
  {path:'agregarVuelo', component: CrearvueloComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
