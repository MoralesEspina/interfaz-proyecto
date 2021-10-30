import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {EstadoBoletoService, EstadoBoleto } from 'src/app/componentes/estadoboleto/Componentes/Service/estado-boleto.service';


@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarEstadoBoletoComponent implements OnInit {

  EstadoBoleto: EstadoBoleto= {
    idestado_boleto: '',
  descripcion: '',
 
  }
  constructor(private EstadoBoletoService:EstadoBoletoService, private router:Router, private ActiveRoute:ActivatedRoute) { }

  ngOnInit(): void {

    const id_entrada = <string>this.ActiveRoute.snapshot.params.idestado_boleto;

    console.log('Id de entrada:' + id_entrada);

    if (id_entrada) {
      this.EstadoBoletoService.getunEstadoBoleto(id_entrada).subscribe(
        (res: any) => {

          this.EstadoBoleto= <any>res[0];
          console.log(res[0])

        },
        err => console.log(err)

      );
    }



  }
  modificar() {
    this.EstadoBoletoService.editEstadoBoleto(this.EstadoBoleto.idestado_boleto, this.EstadoBoleto).subscribe(
      res => {
        console.log(res)
      },
      err => console.log(err)
    );
      this.router.navigate(['listaestadoboleto'])

  }
 


}
