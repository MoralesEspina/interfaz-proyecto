import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CanboletosService, canboletos } from '../SERVICES/canboletos.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-editarCanboletos',
  templateUrl: './editarCanboletos.component.html',
  styleUrls: ['./editarCanboletos.component.css']
})
export class FormularioEditcanboletosComponent implements OnInit {

  canboletos: canboletos = {
    id_cancelacion_boletos: '',
    id_boleto: '',
    motivo: '',
    estado: '',
   
  }
 
  addressForm = this.fb.group({
    id_boleto: [null, Validators.required],
    motivo: [null, Validators.required],
    estado: [null, Validators.required],
    

  });

  hasUnitNumber = false;

  constructor(private fb: FormBuilder, private canboletosservice: CanboletosService, private router: Router, private ActiveRoute: ActivatedRoute) { }

  ngOnInit(): void {

    const id_entrada = <string>this.ActiveRoute.snapshot.params.id_cancelacion_boletos;
    console.log('Id de entrada:' + id_entrada);
    if (id_entrada) {
      this.canboletosservice.getunBoletos(id_entrada).subscribe(
        (res: any) => {
          this.canboletos = <any>res[0];
          console.log(res[0])
        },
        err => console.log(err)
      );
    }

  }

  modificar() {

    this.canboletosservice.updateBoletos(this.canboletos.id_cancelacion_boletos, this.canboletos).subscribe(
      res => {
        console.log(res)
      },
      err => console.log(err)
    );
   
  }



regresar(){
  this.router.navigate(['/cancelacion_boletos']);
}


  onSubmit(): void {
    alert('Thanks!');
  }
}
