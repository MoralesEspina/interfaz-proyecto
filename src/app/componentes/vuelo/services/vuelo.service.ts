import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VueloService {

  url='http://localhost:3000/vuelos';
  constructor(private http: HttpClient) { }

   //get Vuelos
   getVuelos(){
    return this.http.get(this.url);
  }

  //get id Vuelos
  getIdVuelos(id_vuelo:string){
    return this.http.get(this.url+'/'+id_vuelo);
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
