import { MostrarvueloItem } from '../private/vuelos/mostrarvuelo/mostrarvuelo-datasource';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VuelocrudService {
  url = 'https://aeropuerto-dw.herokuapp.com/vuelos'

  constructor(private Http: HttpClient) { }
  getvuelo(){
    return this.Http.get(this.url);
  }

  addvuelo(vuelo:MostrarvueloItem){
    return this.Http.post(this.url, vuelo);

  }
}

