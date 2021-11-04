import { Aeropuerto } from './../../../interfaces/aeropuerto';
import { Component, OnInit } from '@angular/core';

import { AeropuertoService} from 'src/app/componentes/services/aeropuerto.service';

import { Router } from '@angular/router';


@Component({
  selector: 'app-tabla-aeropuerto',
  templateUrl: './tablaAeropuerto.component.html',
  styleUrls: ['./tablaAeropuerto.component.css']
})
export class TablaAeropuertoComponent implements OnInit {

  ListarModelos!: Aeropuerto[];
  constructor(private AeropuertoService:AeropuertoService, private router:Router) { }

  ngOnInit(): void {
    this.listarmodelos();
  }

  listarmodelos(){

    this.AeropuertoService.getAeropuertos().subscribe(
      res=>{
        console.log(res)
        this.ListarModelos=<any>res;
      },
      err=> console.log(err)

    );

  }
  eliminarr(iataCode:string){
    this.AeropuertoService.eliminarAeropuerto(iataCode).subscribe(
      res=>{
        console.log('Eliminado');

        this.router.navigate(['/listaAeropuerto']);


      },
      err=> console.log(err));
      setTimeout(location.reload.bind(location),500);
  }

  modificarr(iataCode:string){
    this.router.navigate(['modificarAeropuerto',iataCode])
  }

  Onnuevoo(){
    this.router.navigate(["agregarAeropuertos"])

    }
    actualizar(){
      setTimeout(location.reload.bind(location),100);
    }


}
