import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { ModeloAvion } from 'src/app/componentes/interfaces/modeloavion';
import { ModeloService } from 'src/app/componentes/services/modelo.service';

@Component({
  selector: 'app-modificar-modelo',
  templateUrl: './modificar-modelo.component.html',
  styleUrls: ['./modificar-modelo.component.css']
})
export class ModificarModeloavionComponent implements OnInit {
  Modelo: ModeloAvion= {
    id_modelo:'',
    nombre: '',
    velocidad_media: '',
    asientos_economicos: '',
    asientos_ejecutivos: ''
  }

  constructor(private ModeloService:ModeloService, private router:Router, private ActiveRoute:ActivatedRoute  ) { }
  ngOnInit(): void {

    const id_entrada =  <string>this.ActiveRoute.snapshot.params.id_modelo;

    console.log('Id de entrada:' +id_entrada);

    if (id_entrada) {
      this.ModeloService.getunmodelo(id_entrada).subscribe(
        (res: any) => {

          this.Modelo = <any>res[0];
          console.log(res[0])

        },
        err => console.log(err)

      );
    }
  }
  modificar() {
    this.ModeloService.editmodelo(this.Modelo.id_modelo, this.Modelo).subscribe(
      res => {
        console.log(res)
      },
      err => console.log(err)
    );

 this.router.navigate(['tablamodelo'])
  }
}
