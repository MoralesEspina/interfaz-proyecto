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
  constructor(private VuelocrudService: VuelocrudService, private router: Router) {

  }

  ngOnInit() {
    this.obtenerVuelos();
  }

  obtenerVuelos() {
    this.VuelocrudService.getVuelo().subscribe(
      res => {
        console.log(res);
        this.ListaVuelos = res;
      },
      err => console.log(err)
    );
  }

  modificarVuelo(id_vuelo: string) {
    this.router.navigate(['/agregarVuelo/' + id_vuelo])
  }

  eliminarVuelo(id_vuelo: string) {
    this.VuelocrudService.deleteVuelo(id_vuelo);
    setTimeout(location.reload.bind(location),500);
  }

  OnNuevoModelo() {
  this.router.navigate(['/agregarVuelo']);
  }
  actualizar(){
    setTimeout(location.reload.bind(location),200);
  }

}
