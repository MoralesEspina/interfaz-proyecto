import { Component, OnInit } from '@angular/core';
import { Ruta1Service } from 'src/app/componentes/services/principal.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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

  constructor(private http: HttpClient, private fb: FormBuilder, private _router:Router) {
    this.form = this.fb.group({
      Origen: ['', Validators.required],
      Destino: ['', Validators.required],
      Fecha: ['', Validators.required]
    })



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
    let datosOrigen = localStorage.getItem("Orig");
    let datosDestino = localStorage.getItem("Dest");
    let datosFecha = localStorage.getItem("Fech");
    console.log(datosOrigen);
    console.log(datosDestino);
    console.log(datosFecha);
  }
*/

 //Para obtener y agregar los datos obtenidos a local storage
 grabar_localstorage() {
  let Orig =  this.form.value.Origen
  let Dest =  this.form.value.Destino
  let Fech = this.form.value.Fecha

  localStorage.setItem("Orig", Orig);
  localStorage.setItem("Dest", Dest);
  localStorage.setItem("Fech", Fech);

  this._router.navigate(["/disponible"]);
}


}
