import { Component, OnInit } from '@angular/core';

import {EstadoBoletoService, EstadoBoleto } from 'src/app/estadoboleto/Componentes/Service/estado-boleto.service';

import { Router } from '@angular/router';


@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarEstadoBoletoComponent implements OnInit {
 
  ListarEstadoBoleto!: EstadoBoleto[];
  constructor(private EstadoBoletoService:EstadoBoletoService, private router:Router) { }

  ngOnInit(): void {
    this.listarestadoboleto();
  }

  listarestadoboleto(){
    this.EstadoBoletoService.getEstadoBoleto().subscribe(
      res=>{
        console.log(res)
        this.ListarEstadoBoleto=<any>res;
      },
      err=> console.log(err)
    );
  }
  eliminarr(idestado_boleto:string){
    this.EstadoBoletoService.eliminarEstadoBoleto(idestado_boleto).subscribe(
      res=>{
        console.log('Eliminado');
       
        this.router.navigate(['/listaestadoboleto']);


      },
      err=> console.log(err));
  }

  modificarr(idestado_boleto:string){
    this.router.navigate(['modificar'+idestado_boleto])
  }




  Onnuevoo(){
    this.router.navigate(["agregarestadoavion"])
    }
}

