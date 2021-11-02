
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ModeloService,Modelo } from 'src/app/services/modelo.service';


@Component({
  selector: 'app-agregar-modeloavion',
  templateUrl: './agregar-modeloavion.component.html',
  styleUrls: ['./agregar-modeloavion.component.css']
})
export class ModeloavionComponent implements OnInit {


  Modelo: Modelo= {
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
    this.router.navigate(['/modeloavion']);
  }

}
