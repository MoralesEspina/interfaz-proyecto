import { Ruta } from './../interfaz/ruta';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url='http://localhost:3000/disponibles';
  URL='http://localhost:3000';
  constructor(private http: HttpClient) { }
   //get Vuelos
   getVuelos(){
    return this.http.get(this.url);
  }

  //get id Vuelos
  getIdVuelos(id_vuelo:string){
    return this.http.get(this.url+'/'+id_vuelo);
  }
  getVuelos2(vuelos:{}): Observable<Ruta[]>{
    console.log(vuelos);
    return this.http.post<Ruta[]>(this.URL+'/disponibilidad/',vuelos)
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
