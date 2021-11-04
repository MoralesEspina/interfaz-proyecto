import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TablaPagosItem } from '../public/pagos/tabla-pagos/tabla-pagos-datasource';

@Injectable({
  providedIn: 'root'
})
export class PagosService {
  URL = 'https://aeropuerto-dw.herokuapp.com';

  constructor(private http: HttpClient,) { }

  //Tablapagos
  getPagos() {
    return this.http.get(this.URL + '/pagos')
  }

  addPago(Pago: TablaPagosItem) {
    return this.http.post(this.URL + '/pagos', Pago);

  }
}
