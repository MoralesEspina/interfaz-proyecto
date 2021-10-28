import { Injectable } from '@angular/core';
import{HttpClient}from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class EstadoAvionService {
  url="https://aeropuerto-dw.herokuapp.com/estado_aviones"
  constructor(private http:HttpClient) { }

  getEstadoAvion(){
    return this.http.get(this.url);
  }

  //get un boleto
  getunEstadoAvion( id_estado_avion:string){
    return this.http.get(this.url+'/'+ id_estado_avion);
  }

  //Crear
  addEstadoAvion( id_estado_avion:EstadoAvion){
    return this.http.post(this.url, id_estado_avion);

  }

  //eliminar
  eliminarEstadoAvion(id_estado_avion:string){
    return this.http.delete(this.url+'/'+ id_estado_avion);
  }

  //modificar
  editEstadoAvion( id_estado_avion:string, EstadoAvion:EstadoAvion){
    return this.http.put(this.url+'/'+ id_estado_avion,EstadoAvion);

  }
}
export interface EstadoAvion {
   id_estado_avion?:any;
  descripcion:string;
  
}
