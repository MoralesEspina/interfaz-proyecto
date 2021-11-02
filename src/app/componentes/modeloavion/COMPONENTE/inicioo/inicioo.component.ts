import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModeloService, Modelo } from './../../SERVICES/modelo.service';




@Component({
  selector: 'app-inicioo',
  templateUrl: './inicioo.component.html',
  styleUrls: ['./inicioo.component.css']
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
  eliminar(id_modelo:string){
    this.ModeloService.eliminarmodelo(id_modelo).subscribe(
      res=>{
        console.log('Eliminado');
        this.ListarModelos;
        this.router.navigate(['/iniciomodelo']);


      },
      err=> console.log(err));
  }

  modificar(id_modelo:string){
    this.router.navigate(['/modificarmodelo/'+id_modelo])
  }




  Onnuevo(){
    this.router.navigate(["modelo"])
    }
  



  
}
