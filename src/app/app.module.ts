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



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    PrincipalComponent,
    AeropuertoComponent,
    AgregarComponent,
    ModificarComponent
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
