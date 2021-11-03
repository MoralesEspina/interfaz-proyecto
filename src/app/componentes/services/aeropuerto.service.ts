import { Injectable } from '@angular/core';
import{HttpClient}from '@angular/common/http'
import { Aeropuerto } from '../interfaces/aeropuerto';


@Injectable({
  providedIn: 'root'
})
export class AeropuertoService {
  url="https://aeropuerto-dw.herokuapp.com/aeropuertos"
  constructor(private http:HttpClient) { }

  getAeropuertos(){
    return this.http.get(this.url);
  }

  //get un boleto
  getUnAeropuerto(iataCode:string){
    return this.http.get(this.url+'/'+iataCode);
  }

  //Crear
  addAeropuerto(aeropuerto:Aeropuerto){
    return this.http.post(this.url,aeropuerto);

  }

  //eliminar
  eliminarAeropuerto(iataCode:string){
    return this.http.delete(this.url+'/'+iataCode);
  }

  //modificar


  editAeropuerto(id:string, aeropuerto:Aeropuerto){
    return this.http.put(this.url+'/'+id,aeropuerto);

  }
}
