import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MostrarvueloItem } from '../mostrarvuelo/mostrarvuelo-datasource';
import { VuelocrudService } from 'src/app/componentes/services/vuelocrud.service';

@Component({
  selector: 'app-crearvuelo',
  templateUrl: './crearvuelo.component.html',
  styleUrls: ['./crearvuelo.component.css']
})
export class CrearvueloComponent {
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


  constructor(private fb: FormBuilder, private Router:Router, private VuelocrudService:VuelocrudService) {
    this.addressForm = this.fb.group({
      id_vuelo:[''],
      id_ruta: ['', Validators.required],
      id_avion: ['', Validators.required],
      fecha_salida: ['', Validators.required],
      id_estado: ['', Validators.required]

    });
  }
  delete(){

    delete this.addressForm.value.id_vuelo
  }

  onSubmit(){
    console.log(this.addressForm)
    const user: MostrarvueloItem ={
      id_vuelo: this.addressForm.value.id_vuelo,
      id_avion: this.addressForm.value.id_avion,
      id_ruta: this.addressForm.value.id_ruta,
      fecha_salida: this.addressForm.value.fecha_salida,
      id_estado: this.addressForm.value.id_estado,
    }
    this.delete();
    console.log(user)
    this.VuelocrudService.addvuelo(user).subscribe();
    this.Router.navigate(['/vuelver'])
  }
}
