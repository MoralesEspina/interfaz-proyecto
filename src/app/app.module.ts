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
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { PrincipalComponent } from './principal/principal.component';
import { LoginComponent } from './componentes/public/login/login/login.component';
import { RegisterComponent } from './componentes/public/register/register.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import "@angular/compiler";
import { AeropuertoComponent } from './componentes/private/aeropuerto/COMPONENTE/tablaAeropuerto.component';
import { AgregarComponent } from './componentes/private/aeropuerto/COMPONENTE/agregarAeropuerto/agregarAeropuerto.component';
import { ModificarComponent } from './componentes/private/aeropuerto/COMPONENTE/modificarAeropuerto/modificarAeropuerto.component';
import { TablaVDisponibleComponent } from './componentes/public/tabla-vdisponible/tabla-vdisponible.component';
import { MostrarPasajerosTablaComponent } from './componentes/public/vuelo/mostrar-pasajeros-tabla/mostrar-pasajeros-tabla.component';
import { MostrarTablaComponent } from './componentes/public/vuelo/mostrar-personas-tabla/mostrar-tabla.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    PrincipalComponent,
    AeropuertoComponent,
    AgregarComponent,
    ModificarComponent,
    PrincipalComponent,
    TablaVDisponibleComponent,
    LoginComponent,
    RegisterComponent,
    RegisterUserComponent,
    MostrarPasajerosTablaComponent,
    MostrarTablaComponent

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
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    HttpClientModule,
    HttpClientModule,
    FormsModule,
    HttpClientModule,
    MatDatepickerModule,
    MatNativeDateModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
