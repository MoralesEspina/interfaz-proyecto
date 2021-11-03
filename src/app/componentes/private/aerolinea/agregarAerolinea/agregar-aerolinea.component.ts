import { ModeloAerolinea } from './../../../interfaces/modeloAerolinea';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { aerolineaService } from '../../../services/aerolinea.service';



@Component({
  selector: 'app-agregar-aerolinea.',
  templateUrl: './agregar-aerolinea.component.html',
  styleUrls: ['./agregar-aerolinea.component.css']
})
export class AgregarAerolineaComponent implements OnInit {

  ModeloAerolinea: ModeloAerolinea= {

    id_aerolinea: '',
    nombre: '',

    }
  constructor(private aerolineaService:aerolineaService, private router:Router) { }

  ngOnInit(): void {

    }
    agregarAerolinea(){

      this.aerolineaService.addmodelo(this.ModeloAerolinea).subscribe();
       this.router.navigate(['/tablaAerolinea']);
     }

}
