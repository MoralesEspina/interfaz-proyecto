import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CanvuelosService, canvuelos, vuelos } from '../SERVICES/canvuelos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-formcanvuelos',
  templateUrl: './formcanvuelos.component.html',
  styleUrls: ['./formcanvuelos.component.css']
})
export class FormcanvuelosComponent {
  
  canvuelos: canvuelos = {
    id_cancelacion_vuelos: '',
    motivo: '',
    estado: '',
    vuelo: '',
    fecha_reasignada: ''
  }

  vuelos: vuelos = {
    id_vuelo: '',
    id_ruta: '',
    id_avion: '',
    fecha_hora_salida: '',
    id_estado: ''
  }


  addressForm = this.fb.group({


    motivo: [null, Validators.required],
    estado: [null, Validators.required],
    vuelo: [null, Validators.required],
    fecha_reasignada: [null, Validators.required],

  });

  hasUnitNumber = false;

  constructor(private fb: FormBuilder, private servicecan: CanvuelosService, private router: Router, private activate: ActivatedRoute) { }

 

  onSubmit(): void {
    alert('Thanks!');
  }


  agregar() {
      this.servicecan.addVuelos(this.canvuelos).subscribe();
      alert('Guardado Correctamente');
  }
  //carga los datos de vuelos
  cargar() {
    if (this.canvuelos.vuelo) {
      this.servicecan.unVuelo(this.canvuelos.vuelo).subscribe(
        res => {
          console.log(res)
          let vuelos = res[0];
          this.vuelos.id_vuelo = vuelos.id_vuelo
          this.vuelos.id_ruta = vuelos.id_ruta
          this.vuelos.id_avion = vuelos.id_avion
          this.vuelos.fecha_hora_salida = vuelos.fecha_hora_salida
          this.vuelos.id_estado = vuelos.id_estado
        },
        err => console.log(err)
      )
    }
  }

  Oneliminar(id: string) {
    if (confirm("Esta Seguro de eliminar el id: " + id)) {
      this.servicecan.deleteVuelos(this.canvuelos.id_cancelacion_vuelos)
      // this.router.navigate(["estudiantes"])
    }
    else {
      //   this.router.navigate(["estudiantes"])
    }
  }


  Onestudiante() {
    //  this.router.navigate(["estudiantestabla"])
  }

}