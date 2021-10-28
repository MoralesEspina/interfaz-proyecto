import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {AerolineaService, Aerolinea } from 'src/app/aerolinea/Componentes/Service/aerolinea.service';


@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarAerolineaComponent implements OnInit {

 Aerolinea: Aerolinea= {
  id_aerolinea: '',
  nombre: '',
 
  }
  constructor(private AerolineaService:AerolineaService, private router:Router, private ActiveRoute:ActivatedRoute) { }

  ngOnInit(): void {

    const id_entrada = <string>this.ActiveRoute.snapshot.params.id;

    console.log('Id de entrada:' + id_entrada);

    if (id_entrada) {
      this.AerolineaService.getunAerolinea(id_entrada).subscribe(
        (res: any) => {

          this.Aerolinea = <any>res[0];
          console.log(res[0])

        },
        err => console.log(err)

      );
    }



  }
  modificar() {
    this.AerolineaService.editAerolinea(this.Aerolinea.id_aerolinea, this.Aerolinea).subscribe(
      res => {
        console.log(res)
      },
      err => console.log(err)
    );
      this.router.navigate(['inicio'])

  }
 


}
