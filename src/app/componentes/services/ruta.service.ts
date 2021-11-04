import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { _ruta } from '../public/rutas/crear-rutas/crear-rutas.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RutaService {
  URL = 'https://aeropuerto-dw.herokuapp.com';

  constructor(private http: HttpClient,) { }


  //Tabla rutas
  getRutas() {
    return this.http.get(this.URL + '/rutas')
  }

  getUnaRuta(id_ruta: string): Observable<_ruta[]> {
    return this.http.get<_ruta[]>(this.URL + '/rutas/' + id_ruta);
  }

  addRuta(Ruta: _ruta) {
    this.http.post(this.URL + "/rutas", Ruta).subscribe(
      res => console.log(res)
    );
  }

  eliminarRuta(id_ruta: string) {
    return this.http.delete(this.URL + '/rutas/' + id_ruta);
  }

  editRuta(id: string, ruta: _ruta) {
    this.http.put(this.URL + '/rutas/' + id, ruta).subscribe(
      res => console.log(res)
    );
    }
}


