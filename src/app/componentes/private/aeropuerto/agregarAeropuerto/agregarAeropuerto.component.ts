import { Aeropuerto } from './../../../interfaces/aeropuerto';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AeropuertoService } from 'src/app/componentes/services/aeropuerto.service';
import { FormBuilder, Validators } from '@angular/forms';



@Component({
  selector: 'app-agregar-aeropuerto',
  templateUrl: './agregarAeropuerto.component.html',
  styleUrls: ['./agregarAeropuerto.component.css']
})
export class AgregarAeropuertoComponent implements OnInit {

  addressForm = this.fb.group({
    iataCode: [''],
    ciudad: ['', Validators.required],
    pais: ['', Validators.required],
  });


  constructor(private _aeropuertoService: AeropuertoService, private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  agregar() {
    const aeropuerto: Aeropuerto = {
      iataCode: this.addressForm.value.iataCode,
      ciudad: this.addressForm.value.ciudad,
      pais: this.addressForm.value.pais,
    }
    this._aeropuertoService.addAeropuerto(aeropuerto);
    console.log(aeropuerto);

    this.router.navigate(['/listaAeropuertos'] );

  }


}
