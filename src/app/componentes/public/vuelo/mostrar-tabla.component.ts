import { AsientoOcupado } from './../../interfaces/asientosOcupados';
import { Pasajero } from './../../interfaces/pasajero';
import { PasajeroService } from './../../services/pasajero.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { VueloService } from 'src/app/componentes/services/vuelo.service';
import { Vuelo } from 'src/app/componentes/interfaces/vuelo';
import { Ruta } from 'src/app/componentes/interfaces/ruta';
import { HttpClient } from '@angular/common/http';
import { AsientosService } from '../../services/asientos.service';

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
    nombres: ['', Validators.required],
    apellidos: ['', Validators.required],
    tipo_doc: ['', Validators.required],
    numero_doc: ['', Validators.required],
    fecha_nacimiento: ['', Validators.required],
    genero: ['', Validators.required],
    nacionalidad: ['', Validators.required],
  });


  _tipoDoc: TipoDoc[] = [
    {value: 'DPI', viewValue: 'DPI'},
    {value: 'Pasaporte', viewValue: 'Pasaporte'},
    {value: 'VISA', viewValue: 'VISA'}
  ];

  _ruta: Ruta = {
    nombre: '' + localStorage.getItem("aero"),
    origen: '',
    destino: '',
    distancia_viaje: '',
    tiempo_viaje: '',
    precio_base: '',
    fecha_salida: '' + localStorage.getItem("Fech"),
    descripcion: '',
    id_vuelo: localStorage.getItem("id_vuelo"),
    id_ruta: localStorage.getItem("id_ruta"),
    id_avion: ''
  }

  asien!: AsientoOcupado[];


  collection1 = [{'numero': this.getCollection, 'letra': this.getCollection}];
  collection2 = [{'tipo_clase': this.getCollection, 'precio': this.getCollection}];

  ListarVuelo!: Vuelo[];
  constructor(private VueloService:VueloService,
    private router:Router, private fb: FormBuilder,
    private http:HttpClient, private Pasajero:PasajeroService,
    private asientoOcupado:AsientosService) {

     }


  ngOnInit(): void {
    this.listarVuelo();
    this.getCollection();
    this.asientosOcupados();
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
    console.log(pasajero);
    this.Pasajero.postPasajeros(pasajero);
    localStorage.setItem("pasajero", JSON.stringify (pasajero))
    this.router.navigate(["/realizarPago"])
  }

   asientosbool: boolean[] = [
    false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,
    false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false
   ]
   asientos: string[] = [
     '1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20'
     ,'21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40'
   ];
   asientosnum: number[] = [
    1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40
  ];

  asiento1A: boolean = false;

  Asientos(id:string, id_a:number){
  const _asiento : AsientoOcupado = {
    id_asiento :id,
    id_avion : ''+localStorage.getItem('id_avion'),
    id_vuelo : ''+localStorage.getItem('id_vuelo'),
  }
    this.asientoOcupado.comprobarAsientos(_asiento).subscribe(
      res=>{
        this.asien=<any>res;
        for (var i = 0; i<this.asien.length; i++){
          if(this.asien[i].id_asiento == id){
             this.asientosbool[id_a] = true;
          }
        }
      },
      err => console.log(err)
    );
  }

  boton : boolean = true;
  crearAsiento(id:string){
    const _asiento : AsientoOcupado = {
      id_asiento :id,
      id_avion : ''+localStorage.getItem('id_avion'),
      id_vuelo : ''+localStorage.getItem('id_vuelo')
    }
    this.boton = false;
    this.asientoOcupado.asientoOcupado(_asiento);
  }

  asientosOcupados(){
    for (var i = 0; i<this.asientos.length; i++){
      if(this.asientos[i] == this.asientosnum[i].toString()){
        this.Asientos(i.toString(),i);
      }
    }
  }
}
