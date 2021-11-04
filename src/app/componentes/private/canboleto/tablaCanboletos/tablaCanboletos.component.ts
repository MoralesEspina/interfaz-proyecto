import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { canboletos, CanboletosService } from 'src/app/componentes/services/canboletos.service';

@Component({
  selector: 'app-tablaCanboletos',
  templateUrl: './tablaCanboletos.component.html',
  styleUrls: ['./tablaCanboletos.component.css']
})
export class TablaCanboletosComponent implements OnInit {

  Listarcanboletos!: canboletos[];
  constructor(private canboletosevice:CanboletosService, private router:Router) { }

  ngOnInit(): void {
    this.listarcanboletos();
  }

  listarcanboletos()
  {
    this.canboletosevice.getBoletos().subscribe(
      res=>{
        console.log(res);
        this.Listarcanboletos=<any>res;
      },
      err => console.log(err)
    );
  }
  modificar(id_cancelacion_boletos:string){
    this.router.navigate(['/editcancelacion_boletos/'+id_cancelacion_boletos])
  }


}
