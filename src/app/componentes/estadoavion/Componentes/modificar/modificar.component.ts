import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {EstadoAvionService, EstadoAvion } from 'src/app/componentes/estadoavion/Componentes/Service/estadoavion.service';


@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarEstadoAvionComponent implements OnInit {

  EstadoAvion: EstadoAvion= {
  id_estado_avion: '',
  descripcion: '',
 
  }
  constructor(private EstadoAvionService:EstadoAvionService, private router:Router, private ActiveRoute:ActivatedRoute) { }

  ngOnInit(): void {

    const id_entrada = <string>this.ActiveRoute.snapshot.params.id_estado_avion;

    console.log('Id de entrada:' + id_entrada);

    if (id_entrada) {
      this.EstadoAvionService.getunEstadoAvion(id_entrada).subscribe(
        (res: any) => {

          this.EstadoAvion = <any>res[0];
          console.log(res[0])

        },
        err => console.log(err)

      );
    }



  }
  modificar() {
    this.EstadoAvionService.editEstadoAvion(this.EstadoAvion.id_estado_avion, this.EstadoAvion).subscribe(
      res => {
        console.log(res)
      },
      err => console.log(err)
    );
      this.router.navigate(['listaestadoavion'])

  }
 


}
