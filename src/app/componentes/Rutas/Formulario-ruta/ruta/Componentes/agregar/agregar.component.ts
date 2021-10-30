import { RutaService } from './../Service/ruta.service';
import { Component, OnInit } from '@angular/core';

import { Ruta } from './../Service/ruta.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarRutaComponent implements OnInit {

  ListarRuta!: Ruta[];
  constructor(private RutaService:RutaService, private router:Router) { }

  ngOnInit(): void {
    this.listarruta();
  }

  listarruta(){
    this.RutaService.getruta().subscribe(
      res=>{
        console.log(res)
        this.ListarRuta=<any>res;
      },
      err=> console.log(err)
    );
  }
  eliminarr(id_ruta:string){
    this.RutaService.eliminarruta(id_ruta).subscribe(
      res=>{
        console.log('Eliminado');

        this.router.navigate(['/listaruta']);



      },
      err=> console.log(err));
  }

  modificarr(id_ruta:string){
    this.router.navigate(['modificar'+id_ruta])
  }




  Onnuevoo(){
    this.router.navigate(["agregarruta"])
    }
}

