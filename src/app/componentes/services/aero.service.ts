import { Injectable } from '@angular/core';
import{HttpClient}from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class AeroService {
  url="https://aeropuerto-dw.herokuapp.com/aeropuertos"
  constructor(private http:HttpClient) { }

  getModelos(){
    return this.http.get(this.url);
  }

  //get un boleto
  getunmodelo(iataCode:string){
    return this.http.get(this.url+'/'+iataCode);
  }

  //Crear
  addmodelo(modelo:Modelo){
    return this.http.post(this.url,modelo);

  }

  //eliminar
  eliminarmodelo(iataCode:string){
    return this.http.delete(this.url+'/'+iataCode);
  }

  //modificar

   


  editmodelo(id:string, modelo:Modelo){
    return this.http.put(this.url+'/'+id,modelo);

  }
}
export interface Modelo {
   
  iataCode:any;
  ciudad: string;
  pais: string;
}
