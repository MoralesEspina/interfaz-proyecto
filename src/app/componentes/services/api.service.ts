import { Ruta } from '../interfaces/ruta';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url='https://aeropuerto-dw.herokuapp.com';

  constructor(private http: HttpClient) { }

  getVuelos2(vuelos:{}): Observable<Ruta[]>{
    console.log(vuelos);
    return this.http.post<Ruta[]>(this.url+'/disponibilidad/',vuelos)
  }


}


