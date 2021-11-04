import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { canboletos, CanboletosService } from 'src/app/componentes/services/canboletos.service';

@Component({
  selector: 'app-agregarCanboletos',
  templateUrl: './agregarCanboletos.component.html',
  styleUrls: ['./agregarCanboletos.component.css']
})
export class FormcanboletosComponent {

  canboletos: canboletos = {
    id_cancelacion_boletos: '',
    id_boleto: '',
    motivo: '',
    estado: '1',
  }


  addressForm = this.fb.group({


    id_boleto: [null, Validators.required],
    motivo: [null, Validators.required],
    estado: [null, Validators.required],


  });

  hasUnitNumber = false;

  constructor(private fb: FormBuilder, private servicecan: CanboletosService, private router: Router, private activate: ActivatedRoute) { }

  agregar() {
      this.servicecan.addBoletos(this.canboletos).subscribe();
      alert('Guardado Correctamente');
  }

  regresar(){
    this.router.navigate(['/cancelacion_boletos']);
  }

}
