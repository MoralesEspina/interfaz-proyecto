
import { Component, OnInit } from '@angular/core';
import {Modelo,aerolineaService} from 'src/app/aerolinea/Service/aerolinea.service';
import {Router, ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  Modelo: Modelo= {
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

          this.Modelo = <any>res[0];
          console.log(res[0])

        },
        err => console.log(err)

      );
    }

  }
  modificar() {
    this.aerolineaService.editmodelo(this.Modelo.id_aerolinea, this.Modelo).subscribe(
      res => {
        console.log(res)
      },
      err => console.log(err)
    );

 this.router.navigate(['add'])
  }


}
