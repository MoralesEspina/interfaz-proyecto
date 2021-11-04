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
import { MatTooltipModule } from '@angular/material/tooltip';
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
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import "@angular/compiler";
import { TablaVDisponibleComponent } from './componentes/public/tabla-vdisponible/tabla-vdisponible.component';
import { AgregarAeropuertoComponent } from './componentes/private/aeropuerto/agregarAeropuerto/agregarAeropuerto.component';
import { LoginComponent } from './componentes/public/login/login.component';
import { TablaCanvuelosComponent } from './componentes/private/canvuelo/tablaCanvuelos/tablaCanvuelos.component';
import { TablaAeropuertoComponent } from './componentes/private/aeropuerto/tablaAeropuerto/tablaAeropuerto.component';
import { FormularioEditcanvuelosComponent } from './componentes/private/canvuelo/editarCanvuelos/editarCanvuelos.component';
import { FormcanvuelosComponent } from './componentes/private/canvuelo/agregarCanvuelos/agregarCanvuelos.component';
import { AgregarAerolineaComponent } from './componentes/private/aerolinea/agregarAerolinea/agregar-aerolinea.component';
import { TablaAerolineaComponent } from './componentes/private/aerolinea/tablaAerolinea/tabla-aerolinea.component';
import { AgregarModeloavionComponent } from './componentes/private/modeloavion/agregarModeloavion/agregar-modeloavion.component';
import { TablaModeloavionComponent } from './componentes/private/modeloavion/tablaModeloavion/tabla-modelo.component';
import { CrearvueloComponent } from './componentes/private/vuelos/crearvuelo/crearvuelo.component';
import { MostrarvueloComponent } from './componentes/private/vuelos/mostrarvuelo/mostrarvuelo.component';
import { AuthGuard } from './Guards/auth.guard';
import { PagosComponent } from './componentes/public/pagos/pagos/pagos.component';
import { TablaPagosComponent } from './componentes/public/pagos/tabla-pagos/tabla-pagos.component';
import { CrearRutasComponent } from './componentes/public/rutas/crear-rutas/crear-rutas.component';
import { MostrarTablaComponent } from './componentes/public/vuelo/mostrar-tabla.component';
import { TablaRutasComponent } from './componentes/public/rutas/tabla-rutas/tabla-rutas.component';




@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    PrincipalComponent,

    //Pagos Componentes
    PagosComponent,
    TablaPagosComponent,

    //Rutas Componentes
    CrearRutasComponent,
    TablaRutasComponent,

    //Aeropuertos Componentes
    TablaAeropuertoComponent,
    AgregarAeropuertoComponent,

    //Vuelos Disponibles Componente
    TablaVDisponibleComponent,

    //Login y Registro Componentes
    LoginComponent,
    RegisterUserComponent,

    // Pasajeros Componentes
    MostrarTablaComponent,

    //Cancelacion de Vuelos Componentes
    TablaCanvuelosComponent,
    FormularioEditcanvuelosComponent,
    FormcanvuelosComponent,

    //Aerolinea Componentes
    AgregarAerolineaComponent,
    TablaAerolineaComponent,

    //Modelo Avion Componentes
    AgregarModeloavionComponent,
    TablaModeloavionComponent,

    //Modelo Mant Vuelos
    CrearvueloComponent,
    MostrarvueloComponent


  ],
  imports: [
    MatTooltipModule,
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
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
