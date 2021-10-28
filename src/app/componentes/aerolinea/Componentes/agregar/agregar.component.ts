import { Component, OnInit } from '@angular/core';

import {AerolineaService, Aerolinea } from 'src/app/aerolinea/Componentes/Service/aerolinea.service';

import { Router } from '@angular/router';


@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarAerolineaComponent implements OnInit {
 
  ListarAerolineas!: Aerolinea[];
  constructor(private AerolineaService:AerolineaService, private router:Router) { }

  ngOnInit(): void {
    this.listarAerolinea();
  }

  listarAerolinea(){
    this.AerolineaService.getAerolineas().subscribe(
      res=>{
        console.log(res)
        this.ListarAerolineas=<any>res;
      },
      err=> console.log(err)
    );
  }
  eliminarr(id_aerolinea:string){
    this.AerolineaService.eliminarAerolinea(id_aerolinea).subscribe(
      res=>{
        console.log('Eliminado');
       
        this.router.navigate(['/listaaerolinea']);


      },
      err=> console.log(err));
  }

  modificarr(id_aerolinea:string){
    this.router.navigate(['modificar'+id_aerolinea])
  }




  Onnuevoo(){
    this.router.navigate(["agregaraerolinea"])
    }
}
