import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { mantVuelo } from '../interfaces/mantVuelo';


@Injectable({
  providedIn: 'root'
})
export class VuelocrudService {
  url = 'https://aeropuerto-dw.herokuapp.com/vuelos'

  constructor(private Http: HttpClient) { }

  getVuelo(): Observable<mantVuelo[]>{
    return this.Http.get<mantVuelo[]>(this.url);
  }

  addVuelo(vuelo:mantVuelo){
    return this.Http.post(this.url, vuelo);
  }

  deleteVuelo(id_vuelo:string){
    this.Http.delete(this.url+'/'+id_vuelo).subscribe(
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

