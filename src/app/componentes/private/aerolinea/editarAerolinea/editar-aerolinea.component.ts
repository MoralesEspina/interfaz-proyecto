import { ModeloAerolinea } from './../../../interfaces/modeloAerolinea';
import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { aerolineaService } from 'src/app/componentes/services/aerolinea.service';


@Component({
  selector: 'app-editar-aerolinea',
  templateUrl: './editar-aerolinea.component.html',
  styleUrls: ['./editar-aerolinea.component.css']
})
export class EditarAerolineaComponent implements OnInit {
  ModeloAerolinea: ModeloAerolinea= {
    id_aerolinea:'',
    nombre: '',
  }


  constructor(private aerolineaService:aerolineaService, private router:Router, private ActiveRoute:ActivatedRoute
    ) { }

  ngOnInit(): void {
    const id_entrada =  <string>this.ActiveRoute.snapshot.params.id_aerolinea;

    console.log('Id de entrada:' +id_entrada);

    if (id_entrada) {
      this.aerolineaService.getunmodelo(id_entrada).subscribe(
        (res: any) => {

          this.ModeloAerolinea = <any>res[0];
          console.log(res[0])

        },
        err => console.log(err)

      );
    }

  }
  modificarAerolinea() {
    this.aerolineaService.editmodelo(this.ModeloAerolinea.id_aerolinea, this.ModeloAerolinea).subscribe(
      res => {
        console.log(res)
      },
      err => console.log(err)
    );

 this.router.navigate(['tablaAerolinea'])
  }


}
