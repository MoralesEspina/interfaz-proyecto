import { Aeropuerto } from './../../../interfaces/aeropuerto';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AeropuertoService } from 'src/app/componentes/services/aeropuerto.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar-aeropuerto',
  templateUrl: './agregarAeropuerto.component.html',
  styleUrls: ['./agregarAeropuerto.component.css']
})
export class AgregarAeropuertoComponent implements OnInit {

  _aeropuerto:Aeropuerto = {
      iataCode: '',
      pais:'',
      ciudad: ''
  }

  addressForm = this.fb.group({
    iataCode: [''],
    ciudad: ['', Validators.required],
    pais: ['', Validators.required],
  });

  editing: boolean = false;
  constructor(private _aeropuertoService: AeropuertoService,
    private _router: Router,
    private fb: FormBuilder,
    private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.cargarAeropuertos();
  }
  cargarAeropuertos() {
    const id_entrada = this._activatedRoute.snapshot.params.iataCode;
    if (id_entrada) {
      this.editing = true;
      this._aeropuertoService.getUnAeropuerto(id_entrada).subscribe(
        res => {
          this._aeropuerto = res[0];
          console.log(res[0]);
        },
        err => console.log(err)
      )
    }else{
      this.editing = false;
    }
  }

  agregarAeropuerto() {

    if(this.editing){
      this._aeropuertoService.editAeropuerto(this._aeropuerto.iataCode, this._aeropuerto);
      this._router.navigate(['/listaAeropuertos']);

    }else{
    const aeropuerto: Aeropuerto = {
      iataCode: this.addressForm.value.iataCode,
      ciudad: this.addressForm.value.ciudad,
      pais: this.addressForm.value.pais,
    }
    this._aeropuertoService.addAeropuerto(aeropuerto);
    this._router.navigate(['/listaAeropuertos']);
  }
}

}
