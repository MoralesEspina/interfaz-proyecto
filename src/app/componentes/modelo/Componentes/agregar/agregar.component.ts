import { Component, OnInit } from '@angular/core';

import {ModeloAvionService, ModeloAvion } from 'src/app/modelo/Componentes/Service/modelo-avion.service';

import { Router } from '@angular/router';


@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarModeloAvionComponent implements OnInit {
 
  ListarModeloAvion!: ModeloAvion[];
  constructor(private ModeloAvionService:ModeloAvionService, private router:Router) { }

  ngOnInit(): void {
    this.listarmodeloavion();
  }

  listarmodeloavion(){
    this.ModeloAvionService.getModeloAvion().subscribe(
      res=>{
        console.log(res)
        this.ListarModeloAvion=<any>res;
      },
      err=> console.log(err)
    );
  }
  eliminarr(id_modelo:string){
    this.ModeloAvionService.eliminarModeloAvion(id_modelo).subscribe(
      res=>{
        console.log('Eliminado');
       
        this.router.navigate(['/listamodeloavion']);


      },
      err=> console.log(err));
  }

  modificarr(id_modelo:string){
    this.router.navigate(['modificar'+id_modelo])
  }




  Onnuevoo(){
    this.router.navigate(["agregarmodeloavion"])
    }
}

