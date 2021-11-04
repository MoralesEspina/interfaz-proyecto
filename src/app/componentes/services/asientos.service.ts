import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AsientosService {

  url='https://aeropuerto-dw.herokuapp.com/asientos';
  constructor(private http:HttpClient) { }


  postAsientos(asiento:Asiento)
  {
    return this.http.post(this.url, asiento).subscribe(
      res => console.log(res)
    )
  }
}

export interface Asiento{
  id_asiento: number;
  numero:number;
  letras:string;
}
