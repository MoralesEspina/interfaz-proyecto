import { Component, OnInit } from '@angular/core';
import { Ruta1Service } from 'src/app/principal/services/principal.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

export interface vuelos {
  Origen: string,
  Destino: string,
  Fecha: Date
}

@Component({

  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  constructor(private http: HttpClient, private fb: FormBuilder) {
    this.form = this.fb.group({
      Origen: ['', Validators.required],
      Destino: ['', Validators.required],
      Fecha: ['', Validators.required]
    })
    this.grabar_localstorage();
    //this.obtener_localstorage();


  }
  //Para obtener los datos de aerolineas y mostrarlos en los formularios
  selected1: string;
  selected: string;
  collection = [{ 'iataCode': this.getCollection, 'pais': this.getCollection, 'ciudad': this.getCollection }];
  form: FormGroup;

  ngOnInit() {
    this.getCollection();
  }

  getCollection() {
    this.http
      .get<any>('https://aeropuerto-dw.herokuapp.com/aeropuertos').subscribe((res: any) => {
        this.collection = res;
      }, error => {
        console.log({ error });
      })
  }

 //Para obtener los datos obtenidos a local storage
 /*obtener_localstorage(){
    let datos = localStorage.getItem("informacion");

    console.log(datos);
  }
*/

 //Para obtener y agregar los datos obtenidos a local storage
 grabar_localstorage() {
  let informacion = {
    Origen: this.form.value.Origen,
    Destino: this.form.value.Destino,
    Fecha: this.form.value.Fecha,
  }
  localStorage.setItem("informacion", JSON.stringify(informacion));

}


}
