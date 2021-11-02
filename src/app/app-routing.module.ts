import { PrincipalComponent } from './principal/principal.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//aeropuerto
import { AgregarComponent } from './componentes/aeropuerto/COMPONENTE/agregar/agregar.component';
import { ModificarComponent } from './componentes/aeropuerto/COMPONENTE/modificar/modificar.component';
import { AeropuertoComponent } from './componentes/aeropuerto/aeropuerto.component';
//aerolinea
import { AgregarAerolineaComponent } from './componentes/aerolinea/Componentes/agregar/agregar.component';
import { ModificarAerolineaComponent } from './componentes/aerolinea/Componentes/modificar/modificar.component';
import { AerolineaComponent } from './componentes/aerolinea/aerolinea.component';
//estadoavion
import { AgregarEstadoAvionComponent } from './componentes/estadoavion/Componentes/agregar/agregar.component';
import { ModificarEstadoAvionComponent } from './componentes/estadoavion/Componentes/modificar/modificar.component';
import { EstadoAvionComponent } from './componentes/estadoavion/estado-avion.component';
//ModelOAvion
import { AgregarModeloAvionComponent } from './componentes/modelo/Componentes/agregar/agregar.component';
import { ModificarModeloAvionComponent } from './componentes/modelo/Componentes/modificar/modificar.component';
import { ModeloAvionComponent } from './componentes/modelo/modelo.component';
//DatosAvion
import { AgregarAvionComponent } from './componentes/avion/Componentes/agregar/agregar.component';
import { ModificarAvionComponent } from './componentes/avion/Componentes/modificar/modificar.component';
import { AvionComponent } from './componentes/avion/avion.component';
//EstadoBoleto
import { AgregarEstadoBoletoComponent } from './componentes/estadoboleto/Componentes/agregar/agregar.component';
import { ModificarEstadoBoletoComponent } from './componentes/estadoboleto/Componentes/modificar/modificar.component';
import { EstadoBoletoComponent } from './componentes/estadoboleto/estadoboleto.component';


const routes: Routes = [
  {path:'', redirectTo:'/inicio',pathMatch:'full'},
  {path:'inicio', component: PrincipalComponent},
  //aeropuertos
  {path:'listaaeropuerto', component:AgregarComponent},
  {path:'modificaraeropuertos/:iataCode', component:ModificarComponent},
  {path:'agregaraeropuerto', component:AeropuertoComponent},
  //aerolinea
  {path:'listaaerolinea', component:AgregarAerolineaComponent},
  {path:'modificaraerolinea/:id_aerolinea', component:ModificarAerolineaComponent},
  {path:'agregaraerolinea', component:AerolineaComponent},
  //Estado Avion
  {path:'listaestadoavion', component:AgregarEstadoAvionComponent},
  {path:'modificarestadoavion/:id_estado_avion', component:ModificarEstadoAvionComponent},
  {path:'agregarestadoavion', component:EstadoAvionComponent},
 //ModeloAvion
 {path:'listamodeloavion', component:AgregarModeloAvionComponent},
 {path:'modificarmodeloavion/:id_modelo', component:ModificarModeloAvionComponent},
 {path:'agregarmodeloavion', component:ModeloAvionComponent},
  //DatosAvion
  {path:'listaavion', component:AgregarAvionComponent},
  {path:'modificardatosavion/:id_avion', component:ModificarAvionComponent},
  {path:'agregaravion', component:AvionComponent},
  //DatosBoleto
  {path:'listaestadoboleto', component:AgregarEstadoBoletoComponent},
  {path:'modificarboleto/:idestado_boleto', component:ModificarEstadoBoletoComponent},
  {path:'agregarestadoboleto', component:EstadoBoletoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
