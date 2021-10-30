import { VueloService } from './../services/vuelo.service';
import { Component, OnInit } from '@angular/core';
import { Vuelo } from '../services/vuelo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mostrar-tabla',
  templateUrl: './mostrar-tabla.component.html',
  styleUrls: ['./mostrar-tabla.component.css']
})
export class MostrarTablaComponent implements OnInit {


  ListarVuelo!: Vuelo[];
  constructor(private VueloService:VueloService, private router:Router) { }

  ngOnInit(): void {
    this.listarVuelo();
  }

  listarVuelo()
  {
    this.VueloService.getVuelos().subscribe(
      res=>{
        console.log(res);
        this.ListarVuelo=<any>res;
      },
      err => console.log(err)
    );
  }


}
