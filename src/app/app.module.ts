import { RegisterUserComponent } from './componentes/public/register-user/register-user.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrincipalComponent } from './principal/principal.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ModificarComponent } from './componentes/aeropuerto/COMPONENTE/modificarAeropuerto/modificarAeropuerto.component';
import { AeropuertoComponent } from './componentes/aeropuerto/COMPONENTE/tablaAeropuerto.component';
import { AgregarComponent } from './componentes/aeropuerto/COMPONENTE/agregarAeropuerto/agregarAeropuerto.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './componentes/public/login/login/login.component';
import { RegisterComponent } from './componentes/public/register/register.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import "@angular/compiler";

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    PrincipalComponent,
    AeropuertoComponent,
    AgregarComponent,
    ModificarComponent
    MostrarTablaComponent,
    AgregarFormularioComponent,
    ModificarFormularioComponent,
    PrincipalComponent,
    LoginComponent,
    RegisterComponent,
    RegisterUserComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
    HttpClientModule
    MatDatepickerModule,
    MatNativeDateModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
