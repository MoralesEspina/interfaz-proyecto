import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AsientoOcupado } from '../interfaces/asientosOcupados';

@Injectable({
  providedIn: 'root'
})
export class AsientosService {

  url='https://aeropuerto-dw.herokuapp.com/';
  constructor(private http:HttpClient) { }


  postAsientos(asiento:AsientoOcupado){
    console.log(asiento);
    return this.http.post(this.url + 'asientosocupados', asiento).subscribe(
      res => console.log(res)
    )
  }

  comprobarAsientos( asientoOcupado:AsientoOcupado){
    return this.http.post(this.url +'asientosocupados', asientoOcupado)
  }

  asientoOcupado(asientoOcupado:AsientoOcupado){
    return this.http.post(this.url +'insertarasientosocupados', asientoOcupado).subscribe(
      res => console.log(res)
    )
  }
}



export interface Asiento{
  id_asiento: number;
  numero:number;
  letras:string;
}
