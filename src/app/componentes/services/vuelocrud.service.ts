import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { mantVuelo } from '../interfaces/mantVuelo';


@Injectable({
  providedIn: 'root'
})
export class VuelocrudService {
  url = 'https://aeropuerto-dw.herokuapp.com/vuelos'

  constructor(private Http: HttpClient) { }

  getvuelo(): Observable<mantVuelo[]>{
    return this.Http.get<mantVuelo[]>(this.url);
  }

  addvuelo(vuelo:mantVuelo){
    return this.Http.post(this.url, vuelo);

  }
}

