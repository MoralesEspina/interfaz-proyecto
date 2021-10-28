import { PrincipalComponent } from './principal/principal.component';
import { MostrarTablaComponent } from './componentes/vuelo/mostrar-tabla/mostrar-tabla.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componentes/public/login/login/login.component';
import { RegisterComponent } from './componentes/public/register/register.component';

const routes: Routes = [
  {path:'', redirectTo:'/inicio',pathMatch:'full'},
  {path:'inicio', component: PrincipalComponent},
  {path:'vuelos', component: MostrarTablaComponent},
  {path:'login', component: LoginComponent},
  {path:'register', component: RegisterComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
