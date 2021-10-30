import { PrincipalComponent } from './principal/principal.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
import { TablaVDisponibleComponent } from './componentes/tabla-vdisponible/tabla-vdisponible.component';

=======
import { LoginComponent } from './componentes/public/login/login/login.component';
import { RegisterComponent } from './componentes/public/register/register.component';
import { RegisterUserComponent } from './componentes/public/register-user/register-user.component';
>>>>>>> 958813374106a94810c7b220f3fe8345588fd0df

const routes: Routes = [
  {path:'', redirectTo:'/inicio',pathMatch:'full'},
  {path:'inicio', component: PrincipalComponent},
  {path: 'disponible', component: TablaVDisponibleComponent},
<<<<<<< HEAD

=======
  {path: 'disponibles', component: VuelodComponent},
  {path:'vuelos', component: MostrarTablaComponent},
  {path:'login', component: LoginComponent},
  {path:'register', component: RegisterComponent},
  {path:'register_user', component: RegisterUserComponent}
>>>>>>> 958813374106a94810c7b220f3fe8345588fd0df
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
