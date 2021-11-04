import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { Ruta } from '../../interfaces/ruta';

@Component({
  selector: 'app-tabla-vdisponible',
  templateUrl: './tabla-vdisponible.component.html',
  styleUrls: ['./tabla-vdisponible.component.css']
})
export class TablaVDisponibleComponent  {

  _ruta: Ruta = {
    nombre: '',
    origen: localStorage.getItem("Orig"),
    destino: localStorage.getItem("Dest"),
    distancia_viaje: '',
    tiempo_viaje: '',
    precio_base: '',
    fecha_salida: '' + localStorage.getItem("Fech"),
    descripcion: '',
    id_vuelo: '',
    id_ruta: '',
  }

  ListarVuelo!: Ruta[];
  constructor(private ApiService: ApiService, private _router: Router) {

  }

  ngOnInit() {
    this.listarVuelo();

  }
  listarVuelo() {
    this.ApiService.getVuelos2(this._ruta).subscribe(
      res => {
        this.ListarVuelo=<any>res;
        console.log(res);
      },
      err => console.log(err)
    )

  }

  seleccionarVuelo(vuelo: any, ruta: any) {

    localStorage.setItem('id_ruta', ruta);
    localStorage.setItem('id_vuelo', vuelo);
    this._router.navigate(["/agregar-personas"]);
  }

}
