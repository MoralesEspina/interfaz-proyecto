
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { aerolineaService,Modelo } from '../../../services/aerolinea.service';


@Component({
  selector: 'app-agregar-aerolinea.',
  templateUrl: './agregar-aerolinea.component.html',
  styleUrls: ['./agregar-aerolinea.component.css']
})
export class ListaComponent implements OnInit {

  Modelo: Modelo= {

    id_aerolinea: '',
    nombre: '',

    }
  constructor(private aerolineaService:aerolineaService, private router:Router) { }

  ngOnInit(): void {

    }
    agregarAerolinea(){

      this.aerolineaService.addmodelo(this.Modelo).subscribe();
       this.router.navigate(['/listar']);
     }

}
