import { Vuelo } from 'src/app/componentes/interfaces/vuelo';
import { AeropuertoService } from 'src/app/componentes/services/aeropuerto.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { VuelocrudService } from 'src/app/componentes/services/vuelocrud.service';
import { mantVuelo } from 'src/app/componentes/interfaces/mantVuelo';
import { HttpClient } from '@angular/common/http';
import { Aeropuerto } from 'src/app/componentes/interfaces/aeropuerto';

@Component({
  selector: 'app-crearvuelo',
  templateUrl: './crearvuelo.component.html',
  styleUrls: ['./crearvuelo.component.css']
})
export class CrearvueloComponent implements OnInit {

  _vuelos: mantVuelo = {
    id_vuelo: '',
    id_ruta: '',
    id_avion: '',
    fecha_salida: '',
    id_estado: '',
  }
  editing: boolean = false;
  Aeropuertos!: Aeropuerto[];
  constructor(private http: HttpClient,
    private fb: FormBuilder,
    private router: Router,
    private VuelocrudService: VuelocrudService,
    private Aeropuerto: AeropuertoService) {

    this.form = this.fb.group({
      id_vuelo: [''],
      Ruta: ['', Validators.required],
      id_avion: ['', Validators.required],
      fecha_salida: ['', Validators.required],
      Id_estado: ['', Validators.required],
      Avion: ['', Validators.required]

    });
  }
  ngOnInit(): void {
    this.getCollectionRuta();
    this.getCollectionAvion();
    this.getCollectionEstados();
    this.obtenerAeropuerto();
  }

  selected2: string;
  selected1: string;
  selected: string;

  collectionRuta = [{ 'origen': this.getCollectionRuta, 'destino': this.getCollectionRuta, 'id_ruta': this.getCollectionRuta }];
  collectionAvion = [{ 'id_avion': this.getCollectionAvion }];
  collectionEstados = [{ 'descripcion': this.getCollectionEstados, 'id_estado': this.getCollectionEstados }];
  form: FormGroup;

  getCollectionRuta() {
    this.http
      .get<any>('https://aeropuerto-dw.herokuapp.com/rutas').subscribe((res: any) => {
        this.collectionRuta = res;
        console.log(res);
      }, error => {
        console.log({ error });
      })
  }

  getCollectionAvion() {
    this.http
      .get<any>('https://aeropuerto-dw.herokuapp.com/aviones').subscribe((res: any) => {
        this.collectionAvion = res;
        console.log(res);
      }, error => {
        console.log({ error });
      })
  }

  getCollectionEstados() {
    this.http
      .get<any>('https://aeropuerto-dw.herokuapp.com/estado_vuelos').subscribe((res: any) => {
        this.collectionEstados = res;
        console.log(res);
      }, error => {
        console.log({ error });
      })
  }

  obtenerAeropuerto() {
    this.Aeropuerto.getAeropuertos().subscribe(
      res => {
        console.log(res);
        this.Aeropuertos = res;
      },
      err => console.log(err)
    );
  }
  crearVuelo() {
    if (this.editing) {
      this.VuelocrudService.editvuelo(this._vuelos.id_vuelo, this._vuelos);
      this.router.navigate(['/crudVuelo']);

    } else {
      const vuelos: mantVuelo = {
        id_vuelo: undefined,
        id_ruta: this.form.value.id_ruta,
        id_avion: this.form.value.id_avion,
        fecha_salida: this.form.value.fecha_salida,
        id_estado: this.form.value.id_estado,
      }
      console.log(this.form.value.Id_estado);
      console.log(this.form.value.Ruta);
      console.log(this.form.value.Avion);
    }
  }
}
