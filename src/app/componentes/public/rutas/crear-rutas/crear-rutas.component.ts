import { Aeropuerto } from './../../../interfaces/aeropuerto';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RutaService } from 'src/app/componentes/services/ruta.service';
import { HttpClient } from '@angular/common/http';

export interface _ruta{
    id_ruta: string
    origen: string,
    destino: string,
    distancia_viaje: string,
    precio_base: string,
    tiempo_viaje: string,
}
@Component({
  selector: 'app-crear-rutas',
  templateUrl: './crear-rutas.component.html',
  styleUrls: ['./crear-rutas.component.css']
})
export class CrearRutasComponent implements OnInit{
  addressForm!: FormGroup;

  modRuta : _ruta ={
    id_ruta: '',
    origen: '',
    destino: '',
    distancia_viaje: '',
    precio_base: '',
    tiempo_viaje: '',
}
  editing: boolean = false;
  constructor(private fb: FormBuilder,
    private _rutaService:RutaService,
    private Router:Router,
    private http:HttpClient,
    private _activatedRoute: ActivatedRoute) {




    this.addressForm = this.fb.group({
      precio_base: ['', Validators.required],
      distancia_viaje: ['', Validators.required],
      tiempo_viaje: ['', Validators.required],
      origen: ['', Validators.required],
      destino: ['', Validators.required]

    });
  }
  ngOnInit(): void {
    this.getCollection();
    this.cargarRutas();
  }

  collectionOrigenDestino = [{'ciudad': this.getCollection, 'pais': this.getCollection, 'iataCode': this.getCollection}];

  getCollection() {
    this.http
      .get<any>('https://aeropuerto-dw.herokuapp.com/aeropuertos').subscribe((res: any) => {
        this.collectionOrigenDestino = res;
      }, error => {
        console.log({ error });
      })
  }

  cargarRutas() {
    const id_entrada = this._activatedRoute.snapshot.params.id_ruta;
    console.log(id_entrada);
    if (id_entrada) {
      this.editing = true;
      this._rutaService.getUnaRuta(id_entrada).subscribe(
        res => {
          this.modRuta = res[0];
          console.log(res[0]);
        },
        err => console.log(err)
      )
    }else{
      this.editing = false;
    }
  }

  onAgregar() {
    if(this.editing){
      this._rutaService.editRuta(this.modRuta.id_ruta, this.modRuta);
      this.Router.navigate(['/tablaRuta']);

    }else{
    const ruta: _ruta ={
      id_ruta:'',
      precio_base: this.addressForm.value.precio_base,
      distancia_viaje: this.addressForm.value.distancia_viaje,
      tiempo_viaje: this.addressForm.value.tiempo_viaje,
      origen: this.addressForm.value.origen,
      destino: this.addressForm.value.destino,
    }
    console.log(ruta)
    this._rutaService.addRuta(ruta);
    this.Router.navigate(['/tablaRuta'])
  }
}
}
