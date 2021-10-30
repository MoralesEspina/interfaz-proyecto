import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { VueloService } from 'src/app/componentes/services/vuelo.service';
import { PersonaService } from 'src/app/componentes/services/persona.service';
import { Persona } from 'src/app/componentes/interfaces/persona';
import { Vuelo } from 'src/app/componentes/interfaces/vuelo';
import { RegisterService } from 'src/app/componentes/services/register.service';


interface TipoDoc {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-mostrar-tabla',
  templateUrl: './mostrar-tabla.component.html',
  styleUrls: ['./mostrar-tabla.component.css']
})
export class MostrarTablaComponent implements OnInit {



  addressForm = this.fb.group({
    id_persona: [''],
    nombres: ['', Validators.required],
    apellidos: ['', Validators.required],
    tipo_doc: ['', Validators.required],
    numero_doc: ['', Validators.required]
  });

  _tipoDoc: TipoDoc[] = [
    {value: 'DPI', viewValue: 'DPI'},
    {value: 'Pasaporte', viewValue: 'Pasaporte'},
    {value: 'VISA', viewValue: 'VISA'}
  ];

  ListarVuelo!: Vuelo[];
  constructor(private VueloService:VueloService,
    private router:Router, private fb: FormBuilder,
    private _personaRegister: RegisterService) {

     }

  ngOnInit(): void {
    this.listarVuelo();

  }

  listarVuelo()
  {
    this.VueloService.getVuelos().subscribe(
      res=>{
        console.log(res);
        this.ListarVuelo=<any>res;
      },
      err => console.log(err)
    );
  }

  onAgregar(){

    const persona: Persona ={
      id_persona:0,
      nombres: this.addressForm.value.nombres,
      apellidos:this.addressForm.value.apellidos,
      tipo_doc:this.addressForm.value.tipo_doc,
      numero_doc:this.addressForm.value.numero_doc,
    }

    this._personaRegister.register(persona);

    let numero_doc = this.addressForm.value.numero_doc;
    localStorage.setItem("NumeroDoc",numero_doc);
    this.router.navigate(['/pasajeros']);
  }


}
