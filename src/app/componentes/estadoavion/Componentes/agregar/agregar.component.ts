import { Component, OnInit } from '@angular/core';

import {EstadoAvionService, EstadoAvion } from 'src/app/componentes/estadoavion/Componentes/Service/estadoavion.service';

import { Router } from '@angular/router';


@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarEstadoAvionComponent implements OnInit {
 
  ListarEstadoAvion!: EstadoAvion[];
  constructor(private EstadoAvionService:EstadoAvionService, private router:Router) { }

  ngOnInit(): void {
    this.listarestadoavion();
  }

  listarestadoavion(){
    this.EstadoAvionService.getEstadoAvion().subscribe(
      res=>{
        console.log(res)
        this.ListarEstadoAvion=<any>res;
      },
      err=> console.log(err)
    );
  }
  eliminarr(id_estado_avion:string){
    this.EstadoAvionService.eliminarEstadoAvion(id_estado_avion).subscribe(
      res=>{
        console.log('Eliminado');
       
        this.router.navigate(['/listaestadoavion']);


      },
      err=> console.log(err));
  }

  modificarr(id_estado_avion:string){
    this.router.navigate(['modificarestadoavion/'+id_estado_avion])
  }




  Onnuevoo(){
    this.router.navigate(["agregarestadoavion"])
    }
}

