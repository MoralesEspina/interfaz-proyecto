import { Aeropuerto } from './../../../interfaces/aeropuerto';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AeropuertoService } from 'src/app/componentes/services/aeropuerto.service';


@Component({
  selector: 'app-agregar-aeropuerto',
  templateUrl: './agregarAeropuerto.component.html',
  styleUrls: ['./agregarAeropuerto.component.css']
})
export class AgregarAeropuertoComponent implements OnInit {

 Modelo: Aeropuerto= {

    iataCode: '',
    ciudad: '',
    pais: '',
    }
  constructor(private AeropuertoService:AeropuertoService, private router:Router ) { }

  ngOnInit(): void {
  }
  agregar(){


   this.AeropuertoService.addAeropuerto(this.Modelo).subscribe();
    this.router.navigate(['/listaaeropuerto']);
  }

}
