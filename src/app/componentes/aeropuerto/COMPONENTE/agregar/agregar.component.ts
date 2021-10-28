import { Component, OnInit } from '@angular/core';

import {AeroService, Modelo } from 'src/app/aeropuerto/Services/aero.service';

import { Router } from '@angular/router';


@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {
 
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
  eliminarr(id:string){
    this.AeroService.eliminarmodelo(id).subscribe(
      res=>{
        console.log('Eliminado');
       
        this.router.navigate(['/listaaeropuerto']);


      },
      err=> console.log(err));
  }

  modificarr(iataCode:string){
    this.router.navigate(['modificar'+iataCode])
  }




  Onnuevoo(){
    this.router.navigate(["agregaraeropuerto"])
    }
}