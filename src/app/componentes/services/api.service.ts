import { Ruta } from './../../interfaz/ruta';
import { TablaPagosItem } from './../pagos/tabla-pagos/tabla-pagos-datasource';
import { TablaRutasItem } from '../rutas/tabla-rutas/tabla-rutas-datasource';

import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url='http://localhost:3000/disponibles';
  URL='http://localhost:3000';

  constructor(private http: HttpClient,) { }
   //Tabla vuelos
   getVuelos(){
    return this.http.get(this.url);
  }

  getIdVuelos(id_vuelo:string){
    return this.http.get(this.url+'/'+id_vuelo);
  }
  getVuelos2(vuelos:{}): Observable<Ruta[]>{
    console.log(vuelos);
    return this.http.post<Ruta[]>(this.URL+'/disponibilidad/',vuelos)
  }

  //Tabla pagos
  getpagos(){
    return this.http.get(this.URL+'/pagos')
  }

  addpago(Pago:TablaPagosItem){
    return this.http.post(this.URL+'/pagos', Pago);

  }

  //Tabla rutas
  getrutas(){
    return this.http.get(this.URL+'/rutas')
  }

  addruta(Ruta:TablaRutasItem){
    return this.http.post(this.URL+'/rutas', Ruta);

  }

}

export interface Vuelo{
  id_vuelo:string;
  id_avion:string;
  id_ruta:string;
  origen:string;
  destino:string;
  precio_base:string;
  distancia_viaje:string;
  tiempo_viaje:string;
  fecha_creacion:string;
  descripcion:string;
}
