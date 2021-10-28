import { Injectable } from '@angular/core';
import{HttpClient}from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class ModeloAvionService {
  url="https://aeropuerto-dw.herokuapp.com/modelos"
  constructor(private http:HttpClient) { }

  getModeloAvion(){
    return this.http.get(this.url);
  }

  //get un boleto
  getunModeloAvion( id_modelo:string){
    return this.http.get(this.url+'/'+ id_modelo);
  }

  //Crear
  addModeloAvion( id_modelo:ModeloAvion){
    return this.http.post(this.url, id_modelo);

  }

  //eliminar
  eliminarModeloAvion(id_modelo:string){
    return this.http.delete(this.url+'/'+ id_modelo);
  }

  //modificar
  editModeloAvion( id_modelo:string, ModeloAvion:ModeloAvion){
    return this.http.put(this.url+'/'+ id_modelo,ModeloAvion);

  }
}
export interface ModeloAvion {
  id_modelo?:any;
  nombre:string;
  velocidad_media:string;
  asientos_economicos:string;
  asientos_ejecutivos:string;
  
}
