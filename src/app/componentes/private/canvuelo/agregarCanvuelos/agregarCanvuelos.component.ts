import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CanvuelosService, canvuelos } from '../../../services/canvuelos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-agregarCanvuelos',
  templateUrl: './agregarCanvuelos.component.html',
  styleUrls: ['./agregarCanvuelos.component.css']
})
export class FormcanvuelosComponent {

  canvuelos: canvuelos = {
    id_cancelacion_vuelos: '',
    motivo: '',
    estado: '1',
    vuelo: '',
    fecha_reasignada: ''
  }


  addressForm = this.fb.group({
    motivo: [null, Validators.required],
    vuelo: [null, Validators.required],
    fecha_reasignada: [null, Validators.required],

  });

  hasUnitNumber = false;

  constructor(private fb: FormBuilder, private servicecan: CanvuelosService, private router: Router, private activate: ActivatedRoute) { }

  agregar() {
    const cancelvuelos: canvuelos = {
      motivo: this.addressForm.value.motivo,
      vuelo: this.addressForm.value.vuelo,
      fecha_reasignada: this.addressForm.value.fecha_reasignada,
      id_cancelacion_vuelos: undefined,
      estado:"1",
    }
    this.servicecan.addCanVuelos(cancelvuelos);
    console.log(cancelvuelos);
    alert('Guardado Correctamente');
      this.router.navigate(['/cancelacion_vuelos']);
  }

  regresar(){
    this.router.navigate(['/cancelacion_vuelos']);
  }

}
