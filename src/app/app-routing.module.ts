import { EditComponent } from './aerolinea/editar-aerolinea/editar-aerolinea.component';
import { PrincipalComponent } from './principal/principal.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './aerolinea/tabla-aerolinea/tabla-aerolinea.component';
import { ListaComponent } from './aerolinea/agregar-aerolinea/agregar-aerolinea.component';


const routes: Routes = [
  {path:'', redirectTo:'/inicio',pathMatch:'full'},
  {path:'inicio', component: PrincipalComponent},



  //Lista Aerolinea
  {path: 'listar', component:AddComponent},
  {path: 'add', component:ListaComponent},
  {path: 'edit/:id_aerolinea', component:EditComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
