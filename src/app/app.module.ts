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
import { ReactiveFormsModule } from '@angular/forms';
import { ModificarFormularioComponent } from './componentes/vuelo/modificar-formulario/modificar-formulario.component';
import { PrincipalComponent } from './principal/principal.component';
import { TablaVDisponibleComponent } from './tabla-vdisponible/tabla-vdisponible.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { HttpClientModule } from '@angular/common/http';
import { VuelodComponent } from './vuelod/vuelod.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MostrarTablaComponent,
    AgregarFormularioComponent,
    ModificarFormularioComponent,
    PrincipalComponent,
    TablaVDisponibleComponent,
    VuelodComponent

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
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
