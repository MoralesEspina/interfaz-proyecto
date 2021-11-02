import { Component, OnInit } from '@angular/core';
import { CanvuelosService, canvuelos } from '../SERVICES/canvuelos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tablaCanvuelos',
  templateUrl: './tablaCanvuelos.component.html',
  styleUrls: ['./tablaCanvuelos.component.css']
})
export class TablaCanvuelosComponent implements OnInit {

  Listarcanvuelos!: canvuelos[];
  constructor(private canvuelosevice:CanvuelosService, private router:Router) { }

  ngOnInit(): void {
    this.listarcanvuelos();
  }

  listarcanvuelos()
  {
    this.canvuelosevice.getVuelos().subscribe(
      res=>{
        console.log(res);
        this.Listarcanvuelos=<any>res;
      },
      err => console.log(err)
    );
  }
  modificar(id_pasajero:string){
    this.router.navigate(['/editcancelacion_vuelos/'+id_pasajero])
  }


}
