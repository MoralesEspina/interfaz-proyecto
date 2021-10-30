import { Component, OnInit } from '@angular/core';

import { AeroService, Modelo } from 'src/app/componentes/services/aero.service';

import { Router } from '@angular/router';


@Component({
  selector: 'app-tabla-aeropuerto',
  templateUrl: './tablaAeropuerto.component.html',
  styleUrls: ['./tablaAeropuerto.component.css']
})
export class AeropuertoComponent implements OnInit {

  ListarModelos!: Modelo[];
  constructor(private AeroService:AeroService, private router:Router) { }

  ngOnInit(): void {
    this.listarmodelos();
  }

  listarmodelos(){
    this.AeroService.getModelos().subscribe(
      res=>{
        console.log(res)
        this.ListarModelos=<any>res;
      },
      err=> console.log(err)

    );

  }
  eliminarr(iataCode:string){
    this.AeroService.eliminarmodelo(iataCode).subscribe(
      res=>{
        console.log('Eliminado');

        this.router.navigate(['/listaAeropuerto']);


      },
      err=> console.log(err));
      setTimeout(location.reload.bind(location),200);
  }

  modificarr(iataCode:string){
    this.router.navigate(['modificarAeropuerto',iataCode])


  }

  Onnuevoo(){
    this.router.navigate(["agregarAeropuertos"])

    }

    actualizar(){
      setTimeout(location.reload.bind(location),500);
    }

}
