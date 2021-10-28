import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EstadoBoletoService, EstadoBoleto} from 'src/app/estadoboleto/Componentes/Service/estado-boleto.service';

@Component({
  selector: 'app-estadoboleto',
  templateUrl: './estadoboleto.component.html',
  styleUrls: ['./estadoboleto.component.css']
})
export class EstadoBoletoComponent implements OnInit {

  EstadoBoleto: EstadoBoleto= {
    
    idestado_boleto: '',
    descripcion: ''
   
    }
  constructor(private EstadoBoletoService:EstadoBoletoService, private router:Router ) { }

  ngOnInit(): void {
  }
  agregar(){
    
    delete this.EstadoBoleto.idestado_boleto;
   this.EstadoBoletoService.addEstadoBoleto(this.EstadoBoleto).subscribe();
    this.router.navigate(['/listaestadoboleto']);
  }

}

