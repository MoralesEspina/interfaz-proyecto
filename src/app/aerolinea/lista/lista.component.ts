
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { aerolineaService,Modelo } from '../Service/aerolinea.service';
import { aerolinea } from '../Modelo/aerolinea';


@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  Modelo: Modelo= {

    id_aerolinea: '',
    nombre: '',

    }
  constructor(private aerolineaService:aerolineaService, private router:Router) { }

  ngOnInit(): void {

    }
    agregar(){

      this.aerolineaService.addmodelo(this.Modelo).subscribe();
       this.router.navigate(['/listar']);
     }

}
