import { TablaPagosItem } from './../tabla-pagos/tabla-pagos-datasource';
import { ApiService } from './../../services/api.service';
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
  /*addressForm = this.fb.group({--
    company: null,
    firstName: [null, Validators.required],
    lastName: [null, Validators.required],
    address: [null, Validators.required],
    address2: null,
    city: [null, Validators.required],
    state: [null, Validators.required],
    postalCode: [null, Validators.compose([
      Validators.required, Validators.minLength(5), Validators.maxLength(5)])
    ],
    shipping: ['free', Validators.required]
  });*/

  constructor(private fb: FormBuilder, private Router:Router, private ApiService:ApiService) {
    this.addressForm = this.fb.group({
      numero_factura:[''],
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
    this.ApiService.addpago(user).subscribe();
    this.Router.navigate(['/pagos'])
  }

}
