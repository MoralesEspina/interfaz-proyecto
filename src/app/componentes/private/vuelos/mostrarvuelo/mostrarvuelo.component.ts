import { Router } from '@angular/router';
import { VuelocrudService } from '../../../services/vuelocrud.service';
import { Component, OnInit } from '@angular/core';
import { mantVuelo } from 'src/app/componentes/interfaces/mantVuelo';


@Component({
  selector: 'app-mostrarvuelo',
  templateUrl: './mostrarvuelo.component.html',
  styleUrls: ['./mostrarvuelo.component.css']
})
export class MostrarvueloComponent implements OnInit {


  //
  ListaVuelos!: mantVuelo[];
  constructor(private VuelocrudService:VuelocrudService, private Router:Router) {

  }

  ngOnInit() {

    this.obtenerVuelos();

  }

  obtenerVuelos()
  {
    this.VuelocrudService.getvuelo().subscribe(
      res=>{
        console.log(res);
        this.ListaVuelos=res;
      },
      err => console.log(err)
    );
  }

}
