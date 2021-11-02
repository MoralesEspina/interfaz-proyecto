import { PrincipalComponent } from './principal/principal.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ModeloavionComponent } from 'src/app/componentes/modeloavion/modeloavion.component';
import { IniciooComponent } from 'src/app/componentes/modeloavion/COMPONENTE/inicioo/inicioo.component';
import { ModificarrComponent } from 'src/app/componentes/modeloavion/COMPONENTE/modificarr/modificarr.component';

const routes: Routes = [
  {path:'', redirectTo:'/inicio',pathMatch:'full'},
  {path:'inicio', component: PrincipalComponent},
  {path: 'modelo',component:ModeloavionComponent},
  {path: 'modeloavion',component:IniciooComponent},
  {path: 'modificarmodelo/:id_modelo',component:ModificarrComponent},

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
