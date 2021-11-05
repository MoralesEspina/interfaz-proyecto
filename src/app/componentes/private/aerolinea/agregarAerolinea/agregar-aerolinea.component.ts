import { Aerolinea } from './../../../interfaces/aerolinea';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { aerolineaService } from '../../../services/aerolinea.service';
import { FormBuilder, Validators } from '@angular/forms';



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
    addressForm = this.fb.group({
      id_aerolinea: [''],
      nombre: ['', Validators.required],
    });
    editing: boolean = false;

  constructor(private aerolineaService:aerolineaService,
              private router:Router,
              private fb: FormBuilder,
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
        const Aero: Aerolinea = {
          nombre: this.addressForm.value.nombre,
          id_aerolinea: undefined,
        }
      this.aerolineaService.addmodelo(Aero).subscribe();
       this.router.navigate(['/tablaAerolinea']);
     }
    }

}
