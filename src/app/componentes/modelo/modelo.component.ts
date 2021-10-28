import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModeloAvionService, ModeloAvion} from './Componentes/Service/modelo-avion.service';

@Component({
  selector: 'app-modelo',
  templateUrl: './modelo.component.html',
  styleUrls: ['./modelo.component.css']
})
export class ModeloAvionComponent implements OnInit {

  ModeloAvion: ModeloAvion= {
    
    id_modelo:'',
    nombre:'',
    velocidad_media:'',
    asientos_economicos:'',
    asientos_ejecutivos:''
   
    }
  constructor(private ModeloAvionService:ModeloAvionService, private router:Router ) { }

  ngOnInit(): void {
  }
  agregar(){
    
    delete this.ModeloAvion.id_modelo;
   this.ModeloAvionService.addModeloAvion(this.ModeloAvion).subscribe();
    this.router.navigate(['/listamodeloavion']);
  }

}
