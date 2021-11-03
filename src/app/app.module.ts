import { ModificarModeloavionComponent } from './componentes/private/modeloavion/modificarModeloavion/modificar-modelo.component';
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
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { PrincipalComponent } from './principal/principal.component';
import { RegisterComponent } from './componentes/public/register/register.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import "@angular/compiler";
import { TablaVDisponibleComponent } from './componentes/public/tabla-vdisponible/tabla-vdisponible.component';
import { MostrarPasajerosTablaComponent } from './componentes/public/vuelo/mostrar-pasajeros-tabla/mostrar-pasajeros-tabla.component';
import { MostrarTablaComponent } from './componentes/public/vuelo/mostrar-personas-tabla/mostrar-tabla.component';
import { AgregarAeropuertoComponent } from './componentes/private/aeropuerto/agregarAeropuerto/agregarAeropuerto.component';
import { ModificarAeropuertoComponent } from './componentes/private/aeropuerto/modificarAeropuerto/modificarAeropuerto.component';
import { LoginComponent } from './componentes/public/login/login.component';
import { TablaCanvuelosComponent } from './componentes/private/canvuelo/tablaCanvuelos/tablaCanvuelos.component';
import { TablaAeropuertoComponent } from './componentes/private/aeropuerto/tablaAeropuerto/tablaAeropuerto.component';
import { FormularioEditcanvuelosComponent } from './componentes/private/canvuelo/editarCanvuelos/editarCanvuelos.component';
import { FormcanvuelosComponent } from './componentes/private/canvuelo/agregarCanvuelos/agregarCanvuelos.component';
import { AgregarAerolineaComponent } from './componentes/private/aerolinea/agregarAerolinea/agregar-aerolinea.component';
import { EditarAerolineaComponent } from './componentes/private/aerolinea/editarAerolinea/editar-aerolinea.component';
import { TablaAerolineaComponent } from './componentes/private/aerolinea/tablaAerolinea/tabla-aerolinea.component';
import { AgregarModeloavionComponent } from './componentes/private/modeloavion/agregarModeloavion/agregar-modeloavion.component';
import { TablaModeloavionComponent } from './componentes/private/modeloavion/tablaModeloavion/tabla-modelo.component';
import { CrearvueloComponent } from './componentes/private/vuelos/crearvuelo/crearvuelo.component';
import { MostrarvueloComponent } from './componentes/private/vuelos/mostrarvuelo/mostrarvuelo.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    PrincipalComponent,

    //Aeropuertos Componentes
    TablaAeropuertoComponent,
    AgregarAeropuertoComponent,
    ModificarAeropuertoComponent,

    //Vuelos Disponibles Componente
    TablaVDisponibleComponent,

    //Login y Registro Componentes
    LoginComponent,
    RegisterComponent,
    RegisterUserComponent,

    // Pasajeros Componentes
    MostrarPasajerosTablaComponent,
    MostrarTablaComponent,

    //Cancelacion de Vuelos Componentes
    TablaCanvuelosComponent,
    FormularioEditcanvuelosComponent,
    FormcanvuelosComponent,

    //Aerolinea Componentes
    AgregarAerolineaComponent,
    EditarAerolineaComponent,
    TablaAerolineaComponent,

    //Modelo Avion Componentes
    ModificarModeloavionComponent,
    AgregarModeloavionComponent,
    TablaModeloavionComponent,

    //Modelo Mant Vuelos
    CrearvueloComponent,
    MostrarvueloComponent

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
