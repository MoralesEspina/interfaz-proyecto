import { PrincipalComponent } from './principal/principal.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormcanboletosComponent } from './componentes/canboleto/agregarCanboletos/agregarCanboletos.component';
import { TablaCanboletosComponent } from './componentes/canboleto/tablaCanboletos/tablaCanboletos.component';
import { FormularioEditcanboletosComponent } from './componentes/canboleto/editarCanboletos/editarCanboletos.component';



const routes: Routes = [
  {path:'', redirectTo:'/inicio',pathMatch:'full'},
  {path:'inicio', component: PrincipalComponent},
  {path:'cancelacion_boletos', component: TablaCanboletosComponent},
  {path:'addcancelacion_boletos', component: FormcanboletosComponent},
  {path:'editcancelacion_boletos/:id_cancelacion_boletos', component: FormularioEditcanboletosComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
