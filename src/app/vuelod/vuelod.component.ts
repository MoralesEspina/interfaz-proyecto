import { Ruta } from './../interfaz/ruta';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from './../shared/api.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vuelod',
  templateUrl: './vuelod.component.html',
  styleUrls: ['./vuelod.component.css']
})
export class VuelodComponent implements OnInit {

  _ruta: Ruta = {
    nombre: '',
    origen: '',
    destino: '',
    distancia_viaje: '',
    tiempo_viaje: '',
    precio_base: '',
    fecha_salida: "",
    descripcion: ''
  }

  addressForm = this.fb.group({
    nombre: [null, Validators.required],
    origen: [null, Validators.required],
    destino: [null, Validators.required],
    distancia_viaje: [null, Validators.required],
    tiempo_viaje: [null, Validators.required],
    precio_base: [null, Validators.required],
    fecha_salida: [null, Validators.required],
    descripcion: [null, Validators.required],
  });

  hasUnitNumber = false;

  editing: boolean = false;

  constructor(private fb: FormBuilder, private _ApiService: ApiService, private _router: Router, private _activatedRoute: ActivatedRoute) {
    this.obtener_localstorage();
    this
   }

  ngOnInit(): void {
    this.cargarDocente();
  }

  cargarDocente() {
    const docente: Ruta = {
      nombre: 'string',
      origen: 'PTY',
      destino: 'SAL',
      distancia_viaje: 'string',
      tiempo_viaje: 'string',
      precio_base: 'string',
      fecha_salida: "2012-11-11",
      descripcion: 'string'
    }

    this.editing = true;
    console.log(docente);
    this._ApiService.getVuelos2(docente).subscribe(
      res => {
        this._ruta = res[0];
        console.log(res[0]);
      },
      err => console.log(err)
    )

  }
  obtener_localstorage(){
    let datosOrigen = localStorage.getItem("Orig");
    let datosDestino = localStorage.getItem("Dest");
    let datosFecha = localStorage.getItem("Fech");
    console.log(datosOrigen);
    console.log(datosDestino);
    console.log(datosFecha);
  }
}
