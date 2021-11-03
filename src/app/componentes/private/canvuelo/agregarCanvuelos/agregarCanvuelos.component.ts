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
    estado: [null, Validators.required],
    vuelo: [null, Validators.required],
    fecha_reasignada: [null, Validators.required],

  });

  hasUnitNumber = false;

  constructor(private fb: FormBuilder, private servicecan: CanvuelosService, private router: Router, private activate: ActivatedRoute) { }

  agregar() {
      this.servicecan.addVuelos(this.canvuelos).subscribe();
      alert('Guardado Correctamente');
      this.router.navigate(['/cancelacion_vuelos']);
  }

  regresar(){
    this.router.navigate(['/cancelacion_vuelos']);
  }

}
