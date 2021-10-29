import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {AeroService, Modelo } from 'src/app/aeropuerto/Services/aero.service';



@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent implements OnInit {

  Modelo: Modelo= {
  iataCode: '',
  ciudad: '',
  pais: '',
  }
  constructor(private AeroService:AeroService, private router:Router, private ActiveRoute:ActivatedRoute) { }

  ngOnInit(): void {

    const id_entrada = <string>this.ActiveRoute.snapshot.params.iataCode;

    console.log('Id de entrada:' + id_entrada);

    if (id_entrada) {
      this.AeroService.getunmodelo(id_entrada).subscribe(
        (res: any) => {

          this.Modelo = <any>res[0];
          console.log(res[0])

        },
        err => console.log(err)

      );
    }



  }
  modificar() {
    this.AeroService.editmodelo(this.Modelo.iataCode, this.Modelo).subscribe(
      res => {
        console.log(res)
      },
      err => console.log(err)
    );
      this.router.navigate(['listaaeropuerto'])
      
  }
 

}
