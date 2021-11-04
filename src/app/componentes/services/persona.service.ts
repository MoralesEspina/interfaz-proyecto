import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../interfaces/persona';

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

  postPersonas(persona:Persona)
  {
    return this.http.post(this.url, persona).subscribe(
      res => console.log(res)
    )
  }

  getId(persona: {}): Observable<Persona[]>{
    return this.http.post<Persona[]>(this.url+'/', persona);
  }

}


