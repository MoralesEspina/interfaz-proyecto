import { Router } from '@angular/router';
import { ApiService } from '../../services/ruta.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TablaRutasItem } from '../tabla-rutas/tabla-rutas-datasource';

@Component({
  selector: 'app-crear-rutas',
  templateUrl: './crear-rutas.component.html',
  styleUrls: ['./crear-rutas.component.css']
})
export class CrearRutasComponent {
  addressForm!: FormGroup;
  /*addressForm = this.fb.group({
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


  constructor(private fb: FormBuilder, private ApiService:ApiService, private Router:Router) {
    this.addressForm = this.fb.group({
      id_ruta:[''],
      precio_base: ['', Validators.required],
      distancia_viaje: ['', Validators.required],
      tiempo_viaje: ['', Validators.required],
      fecha_creacion: ['', Validators.required],
      origen: ['', Validators.required],
      destino: ['', Validators.required]

    });
  }

  onSubmit() {
    console.log(this.addressForm)
    const user: TablaRutasItem ={
      id_ruta: this.addressForm.value.id_ruta,
      precio_base: this.addressForm.value.precio_base,
      distancia_viaje: this.addressForm.value.distancia_viaje,
      tiempo_viaje: this.addressForm.value.tiempo_viaje,
      fecha_creacion: this.addressForm.value.fecha_creacion,
      origen: this.addressForm.value.origen,
      destino: this.addressForm.value.destino,
    }
    console.log(user)
    this.ApiService.addruta(user).subscribe();
    this.Router.navigate(['/rutas'])

  }
}
