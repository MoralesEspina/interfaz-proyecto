import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AvionService, Avion} from './Componentes/Service/aviones.service';

@Component({
  selector: 'app-avion',
  templateUrl: './avion.component.html',
  styleUrls: ['./avion.component.css']
})
export class AvionComponent implements OnInit {

  Avion: Avion= {
    
    id_avion:'',
    estado:'',
    modelo:'',
    aerolinea:'',
 
   
    }
  constructor(private AvionService:AvionService, private router:Router ) { }

  ngOnInit(): void {
  }
  agregar(){
    
    delete this.Avion.id_avion;
   this.AvionService.addAvion(this.Avion).subscribe();
    this.router.navigate(['/listaavion']);
  }

}
