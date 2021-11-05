import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { mantVuelo } from '../interfaces/mantVuelo';


@Injectable({
  providedIn: 'root'
})
export class VuelocrudService {
  url = 'https://aeropuerto-dw.herokuapp.com'
  url2 = "http://localhost:3000"

  constructor(private Http: HttpClient) { }

  getVuelo(): Observable<VuelosDisponibles[]>{
    return this.Http.get<VuelosDisponibles[]>(this.url+"/vuelosdisponibles");
  }

  addVuelo(vuelo:mantVuelo){
    return this.Http.post(this.url+"/vuelos", vuelo).subscribe(
      res => console.log(res)
    );
  }

  getUnVuelo(id_vuelo:string): Observable<VuelosDisponibles[]>{
    return this.Http.post<VuelosDisponibles[]>(this.url2+"/vuelosdisponibles",id_vuelo);
  }

  deleteVuelo(id_vuelo:string){
    this.Http.delete(this.url+'/vuelos/'+id_vuelo).subscribe(
      res => console.log(res)
    )
  }
   //modificar
   editvuelo(id:string, Vuelos :mantVuelo){
    return this.Http.put(this.url+'/'+id,Vuelos).subscribe(
      res => console.log(res)
    );

  }

}

export interface VuelosDisponibles{
  id_vuelo:string;
  origen:string;
  destino:string;
  id_avion:string;
  fecha_salida:string;
  descripcion:string;
}
