import { Router } from '@angular/router';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { RutaService } from 'src/app/componentes/services/ruta.service';
import { _ruta } from '../crear-rutas/crear-rutas.component';

@Component({
  selector: 'app-tabla-rutas',
  templateUrl: './tabla-rutas.component.html',
  styleUrls: ['./tabla-rutas.component.css']
})
export class TablaRutasComponent implements OnInit {

  _Ruta!: _ruta[];
  constructor(private _rutaService: RutaService, private Router: Router) {
  }

  ngOnInit() {
    this.listarRutas();
  }
  listarRutas() {
    this._rutaService.getRutas().subscribe(
      res => {
        console.log(res)
        this._Ruta = <any>res;
      },
      err => console.log(err)
    );

  }

  modificarRuta(id_ruta: string) {
    this.Router.navigate(['modificarRuta', id_ruta])
  }

  eliminarRuta(id_ruta: string) {
    this._rutaService.eliminarRuta(id_ruta).subscribe(
      res => {
        console.log('Eliminado');
        this.Router.navigate(['/listaAeropuerto']);
      },
      err => console.log(err));
    setTimeout(location.reload.bind(location), 500);
  }

  agregarRuta() {
    this.Router.navigate(["crearRuta"])
  }

  actualizarRuta() {
    setTimeout(location.reload.bind(location), 100);
  }
}
