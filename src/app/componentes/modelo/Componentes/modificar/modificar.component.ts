import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {ModeloAvionService, ModeloAvion } from 'src/app/componentes/modelo/Componentes/Service/modelo-avion.service';


@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarModeloAvionComponent implements OnInit {

  ModeloAvion: ModeloAvion= {
  id_modelo: '',
  nombre: '',
 velocidad_media:'',
 asientos_economicos:'',
 asientos_ejecutivos:''
  }
  constructor(private ModeloAvionService:ModeloAvionService, private router:Router, private ActiveRoute:ActivatedRoute) { }

  ngOnInit(): void {

    const id_entrada = <string>this.ActiveRoute.snapshot.params.id_modelo;

    console.log('Id de entrada:' + id_entrada);

    if (id_entrada) {
      this.ModeloAvionService.getunModeloAvion(id_entrada).subscribe(
        (res: any) => {

          this.ModeloAvion = <any>res[0];
          console.log(res[0])

        },
        err => console.log(err)

      );
    }



  }
  modificar() {
    this.ModeloAvionService.editModeloAvion(this.ModeloAvion.id_modelo, this.ModeloAvion).subscribe(
      res => {
        console.log(res)
      },
      err => console.log(err)
    );
      this.router.navigate(['listamodeloavion'])

  }
 


}

