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
import { MostrarTablaComponent } from './componentes/vuelo/mostrar-tabla/mostrar-tabla.component';
import { AgregarFormularioComponent } from './componentes/vuelo/agregar-formulario/agregar-formulario.component';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModificarFormularioComponent } from './componentes/vuelo/modificar-formulario/modificar-formulario.component';
import { PrincipalComponent } from './principal/principal.component';
import { AeropuertoComponent } from './componentes/aeropuerto/aeropuerto.component';
import { AgregarComponent } from './componentes/aeropuerto/COMPONENTE/agregar/agregar.component';
import { ModificarComponent } from './componentes/aeropuerto/COMPONENTE/modificar/modificar.component';
import { HttpClientModule } from '@angular/common/http';
//Aerolinea
import { AerolineaComponent } from './componentes/aerolinea/aerolinea.component';
import { AgregarAerolineaComponent } from './componentes/aerolinea/Componentes/agregar/agregar.component';
import { ModificarAerolineaComponent } from './componentes/aerolinea/Componentes/modificar/modificar.component';
//Estado Avion
import { EstadoAvionComponent } from './componentes/estadoavion/estado-avion.component';
import { AgregarEstadoAvionComponent } from './componentes/estadoavion/Componentes/agregar/agregar.component';
import { ModificarEstadoAvionComponent } from './componentes/estadoavion/Componentes/modificar/modificar.component';
//ModeloAvion
import { ModeloAvionComponent } from './componentes/modelo/modelo.component';
import { AgregarModeloAvionComponent } from './componentes/modelo/Componentes/agregar/agregar.component';
import { ModificarModeloAvionComponent } from './componentes/modelo/Componentes/modificar/modificar.component';

//DatosAvion
import { AgregarAvionComponent } from './componentes/avion/Componentes/agregar/agregar.component';
import { ModificarAvionComponent } from './componentes/avion/Componentes/modificar/modificar.component';
import { AvionComponent } from './componentes/avion/avion.component';
//EstadoBoleto
import { EstadoBoletoComponent } from './componentes/estadoboleto/estadoboleto.component';
import { AgregarEstadoBoletoComponent } from './componentes/estadoboleto/Componentes/agregar/agregar.component';
import { ModificarEstadoBoletoComponent } from './componentes/estadoboleto/Componentes/modificar/modificar.component';
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MostrarTablaComponent,
    AgregarFormularioComponent,
    ModificarFormularioComponent,
    PrincipalComponent,
    AeropuertoComponent,
    AgregarComponent,
    ModificarComponent,
    //Aerolinea
    AerolineaComponent,
    AgregarAerolineaComponent,
    ModificarAerolineaComponent,
    //EstadoAvion
    EstadoAvionComponent,
    AgregarEstadoAvionComponent,
    ModificarEstadoAvionComponent,
    //Modeloavion
    ModeloAvionComponent,
    AgregarModeloAvionComponent,
    ModificarModeloAvionComponent,
    //DatosAvion
    AvionComponent,
    AgregarAvionComponent,
    ModificarAvionComponent,
    //EstadoBoleto
    EstadoBoletoComponent,
    AgregarEstadoBoletoComponent,
    ModificarEstadoBoletoComponent
  ],
  imports: [
    BrowserModule,
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

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }