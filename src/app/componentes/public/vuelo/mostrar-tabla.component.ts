import { Pasajero } from './../../interfaces/pasajero';
import { PasajeroService } from './../../services/pasajero.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { VueloService } from 'src/app/componentes/services/vuelo.service';
import { Vuelo } from 'src/app/componentes/interfaces/vuelo';
import { Ruta } from 'src/app/componentes/interfaces/ruta';
import { HttpClient } from '@angular/common/http';

interface Boletos{
  clase: string;
  num_asiento: string;
}

interface TipoDoc {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-mostrar-tabla',
  templateUrl: './mostrar-tabla.component.html',
  styleUrls: ['./mostrar-tabla.component.css']
})
export class MostrarTablaComponent implements OnInit {


  genero: any[] = [
    'Femenino', 'Masculino'
  ];

  addressForm = this.fb.group({
    id_persona: [''],
    nombres: ['', Validators.required],
    apellidos: ['', Validators.required],
    tipo_doc: ['', Validators.required],
    numero_doc: ['', Validators.required],
    fecha_nacimiento: ['', Validators.required],
    genero: ['', Validators.required],
    nacionalidad: ['', Validators.required],
    num_asiento: ['', Validators.required],
    clase: ['', Validators.required]
  });

  _tipoDoc: TipoDoc[] = [
    {value: 'DPI', viewValue: 'DPI'},
    {value: 'Pasaporte', viewValue: 'Pasaporte'},
    {value: 'VISA', viewValue: 'VISA'}
  ];

  _ruta: Ruta = {
    nombre: '',
    origen: '',
    destino: '',
    distancia_viaje: '',
    tiempo_viaje: '',
    precio_base: '',
    fecha_salida: '',
    descripcion: '',
    id_vuelo: localStorage.getItem("id_vuelo"),
    id_ruta: localStorage.getItem("id_ruta"),
  }
  collection1 = [{'numero': this.getCollection, 'letra': this.getCollection}];
  collection2 = [{'tipo_clase': this.getCollection, 'precio': this.getCollection}];

  ListarVuelo!: Vuelo[];
  constructor(private VueloService:VueloService,
    private router:Router, private fb: FormBuilder,
    private http:HttpClient, private Pasajero:PasajeroService) {

     }


  ngOnInit(): void {
    this.listarVuelo();
    this.getCollection();

  }

  getCollection() {
    this.http
      .get<any>('https://aeropuerto-dw.herokuapp.com/asientos').subscribe((res: any) => {
        this.collection1 = res;
      }, error => {
        console.log({ error });
      })
    this.http
      .get<any>('https://aeropuerto-dw.herokuapp.com/clases').subscribe((res: any) => {
        this.collection2 = res;
      }, error => {
        console.log({ error });
      })
  }

  listarVuelo()
  {
    this.VueloService.getVuelos2(this._ruta).subscribe(
      res=>{
        console.log(res);
        this.ListarVuelo=<any>res;
      },
      err => console.log(err)
    );
  }

  onAgregar(){

    const pasajero: Pasajero ={
      numero_doc:this.addressForm.value.numero_doc,
      tipo_doc:this.addressForm.value.tipo_doc,
      nombres: this.addressForm.value.nombres,
      apellidos:this.addressForm.value.apellidos,
      fecha_nacimiento: this.addressForm.value.fecha_nacimiento,
      genero: this.addressForm.value.genero,
      nacionalidad: this.addressForm.value.nacionalidad,
    }
    this.Pasajero.postPasajeros(pasajero);
    localStorage.setItem("pasajero", JSON.stringify (pasajero))
    this.router.navigate(['/realizarPago']);
  }



}
