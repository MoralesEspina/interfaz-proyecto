import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AeroService,Modelo } from 'src/app/componentes/services/aero.service';


@Component({
  selector: 'app-agregar-aeropuerto',
  templateUrl: './agregarAeropuerto.component.html',
  styleUrls: ['./agregarAeropuerto.component.css']
})
export class AgregarComponent implements OnInit {

 Modelo: Modelo= {

    iataCode: '',
    ciudad: '',
    pais: '',
    }
  constructor(private AeroService:AeroService, private router:Router ) { }

  ngOnInit(): void {
  }
  agregar(){


   this.AeroService.addmodelo(this.Modelo).subscribe();
    this.router.navigate(['/listaaeropuerto']);
  }

}
