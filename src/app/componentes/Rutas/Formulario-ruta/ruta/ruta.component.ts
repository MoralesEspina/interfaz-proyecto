import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RutaService, Ruta} from './Componentes/Service/ruta.service';

@Component({
  selector: 'app-ruta',
  templateUrl: './ruta.component.html',
  styleUrls: ['./ruta.component.css']
})
export class RutaComponent implements OnInit {

  Ruta: Ruta= {

  id_ruta: '',
  precio_base: '',
  distancia_viaje: '',
  tiempo_viaje:'',
  fecha_creacion:'',
  origen:'',
  destino:'',

    }
  constructor(private RutaService:RutaService, private router:Router ) { }

  ngOnInit(): void {
  }
  agregar(){

    delete this.Ruta.id_ruta;
   this.RutaService.addruta(this.Ruta).subscribe();
    this.router.navigate(['/listarruta']);
  }

}
