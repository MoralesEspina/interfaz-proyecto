import { PrincipalComponent } from './principal/principal.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormcanvuelosComponent } from './componentes/canvuelo/agregarCanvuelos/agregarCanvuelos.component';
import { TablaCanvuelosComponent } from './componentes/canvuelo/tablaCanvuelos/tablaCanvuelos.component';
import { FormularioEditcanvuelosComponent } from './componentes/canvuelo/editarCanvuelos/editarCanvuelos.component';



const routes: Routes = [
  {path:'', redirectTo:'/inicio',pathMatch:'full'},
  {path:'inicio', component: PrincipalComponent},
  {path:'cancelacion_vuelos', component: TablaCanvuelosComponent},
  {path:'addcancelacion_vuelos', component: FormcanvuelosComponent},
  {path:'editcancelacion_vuelos/:id_cancelacion_vuelos', component: FormularioEditcanvuelosComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
