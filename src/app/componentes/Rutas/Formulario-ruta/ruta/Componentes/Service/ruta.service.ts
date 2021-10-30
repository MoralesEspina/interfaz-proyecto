import { Injectable } from '@angular/core';
import{HttpClient}from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class RutaService {
  url="https://aeropuerto-dw.herokuapp.com/rutas"
  constructor(private http:HttpClient) { }

  getruta(){
    return this.http.get(this.url);
  }

  //get un boleto
  getunruta( id_ruta:string){
    return this.http.get(this.url+'/'+ id_ruta);
  }

  //Crear
  addruta( id_ruta:Ruta){
    return this.http.post(this.url, id_ruta);

  }

  //eliminar
  eliminarruta(id_ruta:string){
    return this.http.delete(this.url+'/'+ id_ruta);
  }

  //modificar
  editruta( id_ruta:string, Ruta:Ruta){
    return this.http.put(this.url+'/'+ id_ruta,Ruta);

  }
}
export interface Ruta {
  id_ruta: any;
  precio_base: any;
  distancia_viaje: any;
  tiempo_viaje:any;
  fecha_creacion:string;
  origen:string;
  destino:string;

}
