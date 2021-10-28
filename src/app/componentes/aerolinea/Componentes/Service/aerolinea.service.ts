import { Injectable } from '@angular/core';
import{HttpClient}from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class AerolineaService {
  url="https://aeropuerto-dw.herokuapp.com/aerolineas"
  constructor(private http:HttpClient) { }

  getAerolineas(){
    return this.http.get(this.url);
  }

  //get un boleto
  getunAerolinea(id_aerolinea:string){
    return this.http.get(this.url+'/'+id_aerolinea);
  }

  //Crear
  addAerolinea(aerolinea:Aerolinea){
    return this.http.post(this.url,aerolinea);

  }

  //eliminar
  eliminarAerolinea(id_aerolinea:string){
    return this.http.delete(this.url+'/'+id_aerolinea);
  }

  //modificar
  editAerolinea(id_aerolinea:string, aerolinea:Aerolinea){
    return this.http.put(this.url+'/'+id_aerolinea,aerolinea);

  }
}
export interface Aerolinea {
   id_aerolinea?:any;
  nombre:string;
  
}
