import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CanboletosService {

  url = 'https://aeropuerto-dw.herokuapp.com/cancelacion_boletos';
 

  constructor(private http: HttpClient) { }

  getBoletos(){
    return this.http.get(this.url);
  }
  getunBoletos(id_cancelacion_boletos:string){
    return this.http.get(this.url+'/'+id_cancelacion_boletos);
  }

  addBoletos(canboletos: canboletos) {
    return this.http.post(this.url, canboletos);
  }

  updateBoletos(id: string, canboletos: canboletos){
    return this.http.put(this.url+'/'+id,canboletos);

  }

 


}
export interface canboletos {
  id_cancelacion_boletos?: any;
  id_boleto: string;
  motivo: string;
 estado: string;

}

