import { EditComponent } from './aerolinea/edit/edit.component';
import { AddComponent } from './aerolinea/add/add.component';
import { ListaComponent } from './aerolinea/lista/lista.component';
import { PrincipalComponent } from './principal/principal.component';
import { MostrarTablaComponent } from './componentes/vuelo/mostrar-tabla/mostrar-tabla.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path:'', redirectTo:'/inicio',pathMatch:'full'},
  {path:'inicio', component: PrincipalComponent},
  {path:'vuelos', component: MostrarTablaComponent},


  //Lista Aerolinea
  {path: 'add', component:AddComponent},
  {path: 'listar', component:ListaComponent},
  {path: 'edit/:id_aerolinea', component:EditComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
