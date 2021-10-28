import { Injectable } from '@angular/core';
import{HttpClient}from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class AvionService {
  url="https://aeropuerto-dw.herokuapp.com/aviones"
  constructor(private http:HttpClient) { }

  getAvion(){
    return this.http.get(this.url);
  }

  //get un boleto
  getunAvion( id_avion:string){
    return this.http.get(this.url+'/'+ id_avion);
  }

  //Crear
  addAvion( id_avion:Avion){
    return this.http.post(this.url, id_avion);

  }

  //eliminar
  eliminarAvion(id_avion:string){
    return this.http.delete(this.url+'/'+ id_avion);
  }

  //modificar
  editAvion( id_avion:string, Avion:Avion){
    return this.http.put(this.url+'/'+ id_avion,Avion);

  }
}
export interface Avion {
  id_avion?:any;
  estado:string;
  modelo:string;
  aerolinea:string;

  
}
