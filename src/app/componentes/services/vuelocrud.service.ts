import { MostrarvueloItem } from './../private/mostrarvuelo/mostrarvuelo-datasource';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VuelocrudService {
  url = 'http://localhost:3000/vuelos'

  constructor(private Http: HttpClient) { }
  getvuelo(){
    return this.Http.get(this.url);
  }

  addvuelo(vuelo:MostrarvueloItem){
    return this.Http.post(this.url, vuelo);

  }
}

