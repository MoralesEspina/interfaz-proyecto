import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class CanvuelosService {

  url = 'http://localhost:3000/cancelacion_vuelos';
  url1='http://localhost:3000/vuelos';

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

  updateVuelos(id: string, canvuelos: canvuelos) {
    this.http.put(this.url + '/' + id, canvuelos).subscribe(
      res => console.log(res),
      err => console.log(err)
    )
  }

  deleteVuelos(id: string) {
    this.http.delete(this.url + '/' + id).subscribe(
      res => console.log(res),
      err => alert(err(""))
    )
  }


//modificar la tabla vuelos
  unVuelo(id: string) {
    return this.http.get<vuelos[]>(this.url1 + '/' + id);
  }

  updateHero(id:string, vuelos: vuelos): Observable<any> {
    return this.http.put(this.url1+ '/' + id, vuelos)
  
  }
  modificaVuelos(id_vuelo: string, vuelos: vuelos) {
    this.http.put(this.url1 + '/' + id_vuelo, vuelos).subscribe(
      res => console.log(res),
      err => console.log(err)
    )
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
  id_ruta:string;
  id_avion:string;
  fecha_hora_salida: string;
  id_estado: string
}
