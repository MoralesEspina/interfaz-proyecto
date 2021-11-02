import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModeloService, Modelo } from '../../../services/modelo.service';




@Component({
  selector: 'app-tabla-modelo',
  templateUrl: './tabla-modelo.component.html',
  styleUrls: ['./tabla-modelo.component.css']
})
export class IniciooComponent implements OnInit {
  ListarModelos!: Modelo[];

  constructor(private ModeloService:ModeloService, private router:Router) { }

  ngOnInit(): void {
    this.listarmodelos();
  }

  listarmodelos(){
    this.ModeloService.getModelos().subscribe(
      res=>{
        console.log(res)
        this.ListarModelos=<any>res;
      },
      err=> console.log(err)
    );
  }
  eliminarModelo(id_modelo:string){
    this.ModeloService.eliminarmodelo(id_modelo).subscribe(
      res=>{
        console.log('Eliminado');
        this.ListarModelos;
        this.router.navigate(['/iniciomodelo']);


      },
      err=> console.log(err));
  }

  modificarModelo(id_modelo:string){
    this.router.navigate(['/modificarmodelo/'+id_modelo])
  }


  OnnuevoModelo(){
    this.router.navigate(["modelo"])
    }





}
