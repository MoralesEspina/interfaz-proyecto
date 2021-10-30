import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../interfaces/persona';

@Injectable({
  providedIn: 'root'
})
export class RegisterUserService {

  URL = "https://aeropuerto-dw.herokuapp.com";
  constructor(private http : HttpClient) { }

  register(user: {}){
    this.http.post(this.URL+'/usuarios/', user).subscribe(
      res => console.log(res)
    )
  }

  getId(persona: {}): Observable<Persona[]>{
    return this.http.post<Persona[]>(this.URL+'/idpersona/', persona);
  }

}
