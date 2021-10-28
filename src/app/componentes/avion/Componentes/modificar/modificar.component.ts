import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {AvionService, Avion } from 'src/app/avion/Componentes/Service/aviones.service';


@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarAvionComponent implements OnInit {

  Avion: Avion= {
  id_avion: '',
  estado: '',
 modelo:'',
 aerolinea:'',

  }
  constructor(private AvionService:AvionService, private router:Router, private ActiveRoute:ActivatedRoute) { }

  ngOnInit(): void {

    const id_entrada = <string>this.ActiveRoute.snapshot.params.id;

    console.log('Id de entrada:' + id_entrada);

    if (id_entrada) {
      this.AvionService.getunAvion(id_entrada).subscribe(
        (res: any) => {

          this.Avion = <any>res[0];
          console.log(res[0])

        },
        err => console.log(err)

      );
    }



  }
  modificar() {
    this.AvionService.editAvion(this.Avion.id_avion, this.Avion).subscribe(
      res => {
        console.log(res)
      },
      err => console.log(err)
    );
      this.router.navigate(['inicio'])

  }
 


}

