import { Aerolinea } from './../../../interfaces/aerolinea';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { aerolineaService } from '../../../services/aerolinea.service';



@Component({
  selector: 'app-agregar-aerolinea.',
  templateUrl: './agregar-aerolinea.component.html',
  styleUrls: ['./agregar-aerolinea.component.css']
})
export class AgregarAerolineaComponent implements OnInit {

  ModeloAerolinea: Aerolinea= {
    id_aerolinea: '',
    nombre: '',
    }

    editing: boolean = false;

  constructor(private aerolineaService:aerolineaService,
              private router:Router,
              private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.cargarAerolineas();
    }

    cargarAerolineas() {
      const id_entrada = this._activatedRoute.snapshot.params.id_aerolinea;

      if (id_entrada) {
        this.editing = true;
        this.aerolineaService.getUnaAerolinea(id_entrada).subscribe(
          res => {
            this.ModeloAerolinea = res[0];
            console.log(res[0]);
          },
          err => console.log(err)
        )
      }else{
        this.editing = false;
      }
    }

    agregarAerolinea(){
      if(this.editing){
        this.aerolineaService.editmodelo(this.ModeloAerolinea.id_aerolinea, this.ModeloAerolinea);
        this.router.navigate(['/tablaAerolinea']);

      }else{
      this.aerolineaService.addmodelo(this.ModeloAerolinea).subscribe();
       this.router.navigate(['/tablaAerolinea']);
     }
    }

}
