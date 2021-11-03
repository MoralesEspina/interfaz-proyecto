import { Injectable } from '@angular/core';
import{HttpClient}from '@angular/common/http'
import { ModeloAvion } from '../interfaces/modeloavion';


@Injectable({
  providedIn: 'root'
})
export class ModeloService {
  url="https://aeropuerto-dw.herokuapp.com/modelos"

  constructor(private http:HttpClient) { }

  getModelos(){
    return this.http.get(this.url);
  }

  //get un boleto
  getunmodelo(id:string){
    return this.http.get(this.url+'/'+id);
  }

  //Crear
  addmodelo(modelo:ModeloAvion){
    return this.http.post(this.url,modelo);

  }

  //eliminar
  eliminarmodelo(id:string){
    return this.http.delete(this.url+'/'+id);
  }

  //modificar
  editmodelo(id:string, modelo:ModeloAvion){
    return this.http.put(this.url+'/'+id,modelo);

  }
}


