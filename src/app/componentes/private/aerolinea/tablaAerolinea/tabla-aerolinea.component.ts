import { Aerolinea } from './../../../interfaces/aerolinea';
import { Component, OnInit } from '@angular/core';
import {aerolineaService} from 'src/app/componentes/services/aerolinea.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabla-aerolinea',
  templateUrl: './tabla-aerolinea.component.html',
  styleUrls: ['./tabla-aerolinea.component.css']
})
export class TablaAerolineaComponent implements OnInit {

  ListarModelos!: Aerolinea[];
  constructor(private aerolineaService:aerolineaService, private router:Router) { }

  ngOnInit(): void {
    this.listarmodelos();
  }
  listarmodelos(){
    this.aerolineaService.getModelos().subscribe(
      res=>{
        console.log(res)
        this.ListarModelos=<any>res;
      },
      err=> console.log(err)
    );
  }

  eliminarAerolinea(id_aerolinea:string){
    this.aerolineaService.eliminarmodelo(id_aerolinea).subscribe(
      res=>{
        console.log('Eliminado');
        this.ListarModelos;
        this.router.navigate(['/tablaAerolinea']);


      },
      err=> console.log(err));
  }

  modificarAerolinea(id_aerolinea:string){
    this.router.navigate(['/edit/'+id_aerolinea])
  }
  OnnuevaAerolinea(){
    this.router.navigate(["agregarAerolinea"])
    }


}
