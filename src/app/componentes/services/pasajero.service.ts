import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pasajero } from '../interfaces/pasajero';
import { Ruta } from '../interfaces/ruta';

@Injectable({
  providedIn: 'root'
})
export class PasajeroService {

  url='https://aeropuerto-dw.herokuapp.com/pasajeros';
  constructor(private http:HttpClient) { }

  getPasajeros(){
    return this.http.get(this.url);
  }

  getIdPasajeros(id:string){
    return this.http.get(this.url+'/'+id);
  }

  postPasajeros(pasajero:{})
  {
    return this.http.post(this.url, pasajero).subscribe(
      res => console.log(res)
    )
  }

  deletePasajeros(id:string){
    this.http.delete(this.url+'/'+id).subscribe(
      res => console.log(res)
    )
  }

  putPasajeros(id:string, pasajero:Pasajero){
    return this.http.put(this.url+'/'+id, pasajero).subscribe(
      res => console.log(res)
    )
  }


}


