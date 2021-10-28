import { Injectable } from '@angular/core';
import{HttpClient}from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class EstadoBoletoService {
  url="https://aeropuerto-dw.herokuapp.com/estado_boletos"
  constructor(private http:HttpClient) { }

  getEstadoBoleto(){
    return this.http.get(this.url);
  }

  //get un boleto
  getunEstadoBoleto( idestado_boleto:string){
    return this.http.get(this.url+'/'+ idestado_boleto);
  }

  //Crear
  addEstadoBoleto( idestado_boleto:EstadoBoleto){
    return this.http.post(this.url, idestado_boleto);

  }

  //eliminar
  eliminarEstadoBoleto(idestado_boleto:string){
    return this.http.delete(this.url+'/'+ idestado_boleto);
  }

  //modificar
  editEstadoBoleto( idestado_boleto:string, EstadoBoleto:EstadoBoleto){
    return this.http.put(this.url+'/'+ idestado_boleto,EstadoBoleto);

  }
}
export interface EstadoBoleto {
   idestado_boleto?:any;
  descripcion:string;
  
}
