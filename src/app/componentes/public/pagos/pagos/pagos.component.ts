import { PagosService } from './../../../services/pagos.service';
import { TablaPagosItem } from './../tabla-pagos/tabla-pagos-datasource';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-pagos',
  templateUrl: './pagos.component.html',
  styleUrls: ['./pagos.component.css']
})
export class PagosComponent {
  addressForm!: FormGroup;


  constructor(private fb: FormBuilder, private Router:Router, private _pagoService:PagosService) {
    this.addressForm = this.fb.group({
      id_boleto: ['', Validators.required],
      costo_total: ['', Validators.required],
      Tarjeta_Credito: ['', Validators.required],
      Nombre_Propietario: ['', Validators.required],
      Fecha_Exp: ['', Validators.required],
      cvv: ['', Validators.required]

    });
  }

  onSubmit(){
    console.log(this.addressForm)
    const user: TablaPagosItem ={
      numero_factura: this.addressForm.value.numero_factura,
      id_boleto: this.addressForm.value.id_boleto,
      costo_total: this.addressForm.value.costo_total,
      Tarjeta_Credito: this.addressForm.value.Tarjeta_Credito,
      Nombre_Propietario: this.addressForm.value.Nombre_Propietario,
      Fecha_Exp: this.addressForm.value.Fecha_Exp,
      cvv: this.addressForm.value.cvv,
    }
    console.log(user)
    this._pagoService.addPago(user).subscribe();
    this.Router.navigate(['/pagos'])
  }

}
