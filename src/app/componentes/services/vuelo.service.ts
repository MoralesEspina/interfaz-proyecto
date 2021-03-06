import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ruta } from '../interfaces/ruta';
import { Vuelo } from '../interfaces/vuelo';

@Injectable({
  providedIn: 'root'
})
export class VueloService {


  url='https://aeropuerto-dw.herokuapp.com';

  constructor(private http: HttpClient) { }

  //get Vuelos
  getVuelos(){
    return this.http.get(this.url+'/vuelos/');
  }

  //get id Vuelos
  getIdVuelos(id:string){
    return this.http.get(this.url+'/'+id);
  }

  getVuelos2(vuelos:{}): Observable<Ruta[]>{
    console.log(vuelos);
    return this.http.post<Ruta[]>(this.url+'/vuelosruta/',vuelos)
  }
    //modificar
  editvuelo(id:string, Vuelos :Vuelo){
    return this.http.put(this.url+'/'+id,Vuelos).subscribe(
      res => console.log(res)
    );

  }
}


