import { Injectable } from '@angular/core';
import{HttpClient}from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class aerolineaService {


  constructor(private http:HttpClient) { }

  url="https://aeropuerto-dw.herokuapp.com/aerolineas"


  getAerolinea(){
    return this.http.get<aerolineaService[]>(this.url);
  }

  getModelos(){
    return this.http.get(this.url);
  }

  //get un boleto
  getunmodelo(id:string){
    return this.http.get(this.url+'/'+id);
  }
  addmodelo(modelo:Modelo){
    return this.http.post(this.url,modelo);

  }

  //eliminar
  eliminarmodelo(id:string){
    return this.http.delete(this.url+'/'+id);
  }

  //modificar
  editmodelo(id:string, modelo:Modelo){
    return this.http.put(this.url+'/'+id,modelo);

  }


}

export interface Modelo {

  id_aerolinea:any;
  nombre: string;

}
