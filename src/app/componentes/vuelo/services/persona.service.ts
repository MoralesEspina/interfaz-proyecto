import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  url='https://aeropuerto-dw.herokuapp.com/personas';
  constructor(private http:HttpClient) { }

  //get personas
  getPersonas(){
    return this.http.get(this.url);
  }

  //get id personas
  getIdPersonas(id:string){
    return this.http.get(this.url+'/'+id);
  }

  postPersonas(persona:Persona)
  {
    return this.http.post(this.url, persona).subscribe(
      res => console.log(res)
    )
  }

  deletePersonas(id:string){
    this.http.delete(this.url+'/'+id).subscribe(
      res => console.log(res)
    )
  }

  putPersona(id:string, persona:Persona){
    return this.http.put(this.url+'/'+id, persona).subscribe(
      res => console.log(res)
    )
  }

  getId(persona: {}): Observable<Persona[]>{
    return this.http.post<Persona[]>(this.url+'/', persona);
  }

}

export interface Persona{
  id_persona: string;
  nombres:string;
  apellidos:string;
  tipo_doc:string;
  numero_doc:any;
}


