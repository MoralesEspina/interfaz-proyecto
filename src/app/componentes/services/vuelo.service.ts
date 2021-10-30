import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VueloService {


  url='https://aeropuerto-dw.herokuapp.com/vuelos';

  constructor(private http: HttpClient) { }

  //get Vuelos
  getVuelos(){
    return this.http.get(this.url);
  }

  //get id Vuelos
  getIdVuelos(id:string){
    return this.http.get(this.url+'/'+id);
  }
}


