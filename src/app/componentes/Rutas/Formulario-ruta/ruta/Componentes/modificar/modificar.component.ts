import { RutaService } from './../Service/ruta.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';
import { Ruta } from './../Service/ruta.service';
import { FormBuilder, Validators } from '@angular/forms';


export interface vuelos {
  Origen: string,
  Destino: string,
  Fecha: Date
}

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarRutaComponent implements OnInit {

  modificar = this.fb.group({
    Origen: ['', Validators.required],
    Destino: ['', Validators.required],
    Fecha: ['', Validators.required]
 })

  rutas: Ruta= {
    id_ruta: '',
    precio_base: '',
    distancia_viaje: '',
    tiempo_viaje:'',
    fecha_creacion:'',
    origen:'',
    destino:'',
  }


  constructor(private http: HttpClient,private RutaService:RutaService, private router:Router,private fb: FormBuilder, private ActiveRoute:ActivatedRoute) {

  }

  form: FormGroup;
  selected1: string;
   selected: string;
   collection = [{ 'iataCode': this.getCollection, 'pais': this.getCollection, 'ciudad': this.getCollection }];


  ngOnInit(): void {
    this.getCollection();

    const id_entrada = <string>this.ActiveRoute.snapshot.params.id;

    console.log('Id de entrada:' + id_entrada);

    if (id_entrada) {
      this.RutaService.getunruta(id_entrada).subscribe(
        (res: any) => {

          this.rutas = <any>res[0];
          console.log(res[0])

        },
        err => console.log(err)

      );
    }

  }

  getCollection() {
    this.http
      .get<any>('https://aeropuerto-dw.herokuapp.com/aeropuertos').subscribe((res: any) => {
        this.collection = res;
      }, error => {
        console.log({ error });
      })
  }

  agregar() {
    this.RutaService.editruta(this.rutas.id_ruta, this.rutas).subscribe(
      res => {
        console.log(res)
      },
      err => console.log(err)
    );
      this.router.navigate(['./listaruta'])

  }




}

