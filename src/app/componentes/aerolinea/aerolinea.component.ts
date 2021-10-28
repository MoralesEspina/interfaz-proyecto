import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AerolineaService, Aerolinea} from 'src/app/aerolinea/Componentes/Service/aerolinea.service';

@Component({
  selector: 'app-aerolinea',
  templateUrl: './aerolinea.component.html',
  styleUrls: ['./aerolinea.component.css']
})
export class AerolineaComponent implements OnInit {

Aerolinea: Aerolinea= {
    
    id_aerolinea: '',
    nombre: ''
   
    }
  constructor(private AerolineaService:AerolineaService, private router:Router ) { }

  ngOnInit(): void {
  }
  agregar(){
    
    delete this.Aerolinea.id_aerolinea;
   this.AerolineaService.addAerolinea(this.Aerolinea).subscribe();
    this.router.navigate(['/listaaerolinea']);
  }

}
