import { Aeropuerto } from './../../../interfaces/aeropuerto';
import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { AeropuertoService } from 'src/app/componentes/services/aeropuerto.service';

@Component({
  selector: 'app-modificar-aeropuerto',
  templateUrl: './modificarAeropuerto.component.html',
  styleUrls: ['./modificarAeropuerto.component.css']
})
export class ModificarAeropuertoComponent implements OnInit {

  Modelo: Aeropuerto= {
  iataCode: '',
  ciudad: '',
  pais: '',
  }
  constructor(private AeropuertoService:AeropuertoService, private router:Router, private ActiveRoute:ActivatedRoute) { }

  ngOnInit(): void {

    const id_entrada = <string>this.ActiveRoute.snapshot.params.iataCode;

    console.log('Id de entrada:' + id_entrada);

    if (id_entrada) {
      this.AeropuertoService.getUnAeropuerto(id_entrada).subscribe(
        (res: any) => {

          this.Modelo = <any>res[0];
          console.log(res[0])

        },
        err => console.log(err)

      );
    }



  }
  modificar() {
    this.AeropuertoService.editAeropuerto(this.Modelo.iataCode, this.Modelo).subscribe(
      res => {
        console.log(res)
      },
      err => console.log(err)
    );
      this.router.navigate(['listaaeropuerto'])

  }


}
