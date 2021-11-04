import { Injectable } from '@angular/core';
import{HttpClient}from '@angular/common/http'
import { Aerolinea } from '../interfaces/aerolinea';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class aerolineaService {


  constructor(private http:HttpClient) { }

  url="https://aeropuerto-dw.herokuapp.com/aerolineas"


  getAerolinea(){
    return this.http.get<aerolineaService[]>(this.url);
  }

  getUnaAerolinea(id_aerolinea: string): Observable<Aerolinea[]> {
    return this.http.get<Aerolinea[]>(this.url + '/' + id_aerolinea);
  }

  getModelos(){
    return this.http.get(this.url);
  }

  //get un boleto
  getunmodelo(id:string){
    return this.http.get(this.url+'/'+id);
  }
  addmodelo(modelo:Aerolinea){
    return this.http.post(this.url,modelo);

  }

  //eliminar
  eliminarmodelo(id:string){
    return this.http.delete(this.url+'/'+id);
  }

  //modificar
  editmodelo(id:string, modelo:Aerolinea){
    return this.http.put(this.url+'/'+id,modelo).subscribe(
      res => console.log(res)
    );

  }


}

