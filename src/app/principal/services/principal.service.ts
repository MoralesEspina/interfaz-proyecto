import{HttpClient, HttpClientModule}from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import {  TablaDataSource, Ruta } from '../tabla-datasource';

@Injectable({
  providedIn: 'root'
})
export class Ruta1Service {
 URL = "https://aeropuerto-dw.herokuapp.com";
  constructor(private http : HttpClient) { }

  getRuta(): Observable<Ruta[]>{
    return this.http.get<Ruta[]>(this.URL+'/aeropuertos')
  }
}
