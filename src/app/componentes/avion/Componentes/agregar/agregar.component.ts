import { Component, OnInit } from '@angular/core';

import {AvionService, Avion } from 'src/app/componentes/avion/Componentes/Service/aviones.service';

import { Router } from '@angular/router';


@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarAvionComponent implements OnInit {
 
  ListarAvion!: Avion[];
  constructor(private AvionService:AvionService, private router:Router) { }

  ngOnInit(): void {
    this.listaravion();
  }

  listaravion(){
    this.AvionService.getAvion().subscribe(
      res=>{
        console.log(res)
        this.ListarAvion=<any>res;
      },
      err=> console.log(err)
    );
  }
  eliminarr(id_avion:string){
    this.AvionService.eliminarAvion(id_avion).subscribe(
      res=>{
        console.log('Eliminado');
       
        this.router.navigate(['/listaavion']);


      },
      err=> console.log(err));
  }

  modificarr(id_avion:string){
    this.router.navigate(['modificardatosavion/'+id_avion])
  }




  Onnuevoo(){
    this.router.navigate(["agregaravion"])
    }
}

