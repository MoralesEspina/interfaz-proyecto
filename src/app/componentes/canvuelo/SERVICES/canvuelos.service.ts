import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CanvuelosService {

  url = 'https://aeropuerto-dw.herokuapp.com/cancelacion_vuelos';
  url1= 'https://aeropuerto-dw.herokuapp.com/cancelacion_vueloss';

  constructor(private http: HttpClient) { }

  getVuelos(){
    return this.http.get(this.url);
  }
  getunVuelos(id_vuelo:string){
    return this.http.get(this.url+'/'+id_vuelo);
  }

  addVuelos(canvuelos: canvuelos) {
    return this.http.post(this.url, canvuelos);
  }

  updateVuelos(id: string, canvuelos: canvuelos){
    return this.http.put(this.url+'/'+id,canvuelos);

  }

  updateVueloss(id: string, vuelos: vuelos){
    return this.http.put(this.url1+'/'+id, vuelos);

  }


}
export interface canvuelos {
  id_cancelacion_vuelos?: any;
  motivo: string;
  estado: string;
  vuelo: string;
  fecha_reasignada: string
}
export interface vuelos {
  id_vuelo?: any;
  fecha_salida: string;
}
