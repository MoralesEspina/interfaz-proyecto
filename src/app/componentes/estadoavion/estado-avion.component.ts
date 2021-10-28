import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EstadoAvionService, EstadoAvion} from 'src/app/estadoavion/Componentes/Service/estadoavion.service';

@Component({
  selector: 'app-estado-avion',
  templateUrl: './estado-avion.component.html',
  styleUrls: ['./estado-avion.component.css']
})
export class EstadoAvionComponent implements OnInit {

  EstadoAvion: EstadoAvion= {
    
    id_estado_avion: '',
    descripcion: ''
   
    }
  constructor(private EstadoAvionService:EstadoAvionService, private router:Router ) { }

  ngOnInit(): void {
  }
  agregar(){
    
    delete this.EstadoAvion.id_estado_avion;
   this.EstadoAvionService.addEstadoAvion(this.EstadoAvion).subscribe();
    this.router.navigate(['/listaestadoavion']);
  }

}
