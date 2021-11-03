import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(  private ModeloService:ModeloService, private router:Router ) { }

  ngOnInit(): void {
  }

  agregarModelo(){

    delete this.Modelo.id_modelo;
    this.ModeloService.addmodelo(this.Modelo).subscribe();
    this.router.navigate(['/tablamodelo']);
  }

}
