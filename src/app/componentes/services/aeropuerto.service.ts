import { Aeropuerto } from './../interfaces/aeropuerto';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class AeropuertoService {
  url = "https://aeropuerto-dw.herokuapp.com/aeropuertos"
  constructor(private http: HttpClient) { }

  getAeropuertos(): Observable<Aeropuerto[]> {
    return this.http.get<Aeropuerto[]>(this.url);
  }

  //get un boleto
  getUnAeropuerto(iataCode: string): Observable<Aeropuerto[]> {
    return this.http.get<Aeropuerto[]>(this.url + '/' + iataCode);
  }

  //Crear
  addAeropuerto(aeropuerto: Aeropuerto) {
    this.http.post(this.url, aeropuerto).subscribe(
      res => console.log(res)
    );

  }

  //eliminar
  eliminarAeropuerto(iataCode: string) {
    return this.http.delete(this.url + '/' + iataCode);
  }

  //modificar

  editAeropuerto(id: string, aeropuerto: Aeropuerto) {
    this.http.put(this.url + '/' + id, aeropuerto).subscribe(
      res => console.log(res)
    );

  }
}
