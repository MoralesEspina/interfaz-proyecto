import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CanvuelosService, canvuelos, vuelos } from '../../../services/canvuelos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editarCanvuelos',
  templateUrl: './editarCanvuelos.component.html',
  styleUrls: ['./editarCanvuelos.component.css']
})
export class FormularioEditcanvuelosComponent implements OnInit {

  canvuelos: canvuelos = {
    id_cancelacion_vuelos: '',
    motivo: '',
    estado: '',
    vuelo: '',
    fecha_reasignada: ''
  }
  vuelos: vuelos = {
    id_vuelo: '',
    fecha_salida: '',
  }
  addressForm = this.fb.group({

    motivo: [null, Validators.required],
    estado: [null, Validators.required],
    vuelo: [null, Validators.required],
    fecha_reasignada: [null, Validators.required],

  });

  hasUnitNumber = false;

  constructor(private fb: FormBuilder, private canvuelosservice: CanvuelosService, private router: Router, private ActiveRoute: ActivatedRoute) { }

  ngOnInit(): void {

    const id_entrada = <string>this.ActiveRoute.snapshot.params.id_cancelacion_vuelos;
    console.log('Id de entrada:' + id_entrada);
    if (id_entrada) {
      this.canvuelosservice.getunVuelos(id_entrada).subscribe(
        (res: any) => {
          this.canvuelos = <any>res[0];
          console.log(res[0])
        },
        err => console.log(err)
      );
    }

  }

  modificar() {

    this.canvuelosservice.updateVuelos(this.canvuelos.id_cancelacion_vuelos, this.canvuelos).subscribe(
      res => {
        console.log(res)
      },
      err => console.log(err)
    );
    this.actualizarvuelos()
    this.router.navigate(['/cancelacion_vuelos']);
  }

  actualizarvuelos() {

    let num: number
    num = parseInt(this.canvuelos.estado)
    if (num == 2) {
      console.log('actualiza fecha')
      this.vuelos.fecha_salida = this.canvuelos.fecha_reasignada;
      console.log("hola fecha actual: " + this.vuelos.fecha_salida),
        this.canvuelosservice.updateVueloss(this.canvuelos.vuelo, this.vuelos).subscribe(
          res => {
            console.log(res)
          },
          err => console.log(err)
        )
    }
    else {
      console.log('No actualiza la fecha');

    }
  }

regresar(){
  this.router.navigate(['/cancelacion_vuelos']);
}

}
