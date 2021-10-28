import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AeroService, Modelo} from 'src/app/aeropuerto/Services/aero.service';

@Component({
  selector: 'app-aeropuerto',
  templateUrl: './aeropuerto.component.html',
  styleUrls: ['./aeropuerto.component.css']
})
export class AeropuertoComponent implements OnInit {

 Modelo: Modelo= {
    
    iataCode: '',
    ciudad: '',
    pais: '',
    }
  constructor(private AeroService:AeroService, private router:Router ) { }

  ngOnInit(): void {
  }
  agregar(){
    
    delete this.Modelo.id;
   this.AeroService.addmodelo(this.Modelo).subscribe();
    this.router.navigate(['/listaaeropuerto']);
  }

}
