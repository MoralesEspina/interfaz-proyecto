import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloAvion } from 'src/app/componentes/interfaces/modeloavion';
import {ModeloService } from 'src/app/componentes/services/modelo.service';


@Component({
  selector: 'app-agregar-modeloavion',
  templateUrl: './agregar-modeloavion.component.html',
  styleUrls: ['./agregar-modeloavion.component.css']
})
export class AgregarModeloavionComponent implements OnInit {


  Modelo: ModeloAvion= {
   id_modelo:'',
    nombre: '',
    velocidad_media: '',
    asientos_economicos: '',
    asientos_ejecutivos: ''
  }
  addressForm = this.fb.group({
    id_modelo:[""],
    nombre: ['', Validators.required],
    velocidad_media: ['', Validators.required],
    asientos_economicos: ['', Validators.required],
    asientos_ejecutivos: ['', Validators.required]
  });
  editing: boolean = false;

  constructor(  private ModeloService:ModeloService,
                private router:Router,
                private fb: FormBuilder,
                private _activatedRoute: ActivatedRoute ) { }

  ngOnInit(): void {
    this.cargarModelos();
  }

  cargarModelos() {
    const id_entrada = this._activatedRoute.snapshot.params.id_modelo;

    if (id_entrada) {
      this.editing = true;
      this.ModeloService.getUnModelo(id_entrada).subscribe(
        res => {
          this.Modelo = res[0];
          console.log(res[0]);
        },
        err => console.log(err)
      )
    }else{
      this.editing = false;
    }
  }

  agregarModelo(){
    if(this.editing){
      this.ModeloService.editmodelo(this.Modelo.id_modelo, this.Modelo);
      this.router.navigate(['/tablamodelo']);

    }else{
      const model: ModeloAvion = {
        nombre: this.addressForm.value.nombre,
        velocidad_media: this.addressForm.value.velocidad_media,
        asientos_ejecutivos: this.addressForm.value.asientos_ejecutivos,
        asientos_economicos: this.addressForm.value.asientos_economicos,
        id_modelo: undefined,
      }
    this.ModeloService.addmodelo(model).subscribe();
    this.router.navigate(['/tablamodelo']);
  }
}

}
