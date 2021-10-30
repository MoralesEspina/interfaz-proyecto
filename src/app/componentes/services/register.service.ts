import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persona } from '../interfaces/persona';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  URL = "https://aeropuerto-dw.herokuapp.com";
  constructor(private http : HttpClient) { }

  register(persona: {}){
    this.http.post(this.URL+'/personas/', persona).subscribe(
      res => console.log(res)
    )
  }
}
