import { PersonaService } from '../services/persona.service';
import { Vuelo, VueloService } from '../services/vuelo.service';
import { Persona} from '../services/persona.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mostrar-tabla',
  templateUrl: './mostrar-tabla.component.html',
  styleUrls: ['./mostrar-tabla.component.css']
})
export class MostrarTablaComponent implements OnInit {

  documento: any[] = [
    'DPI', 'Otro'
  ];

  addressForm = this.fb.group({
    id_persona: [''],
    nombres: ['', Validators.required],
    apellidos: ['', Validators.required],
    tipo_doc: ['', Validators.required],
    numero_doc: ['', Validators.required]
  });

  ListarVuelo!: Vuelo[];
  constructor(private VueloService:VueloService,
    private router:Router, private fb: FormBuilder,
    private personaService: PersonaService) {

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
      id_persona:this.addressForm.value.id_persona,
      nombres: this.addressForm.value.nombres,
      apellidos:this.addressForm.value.apellidos,
      tipo_doc:this.addressForm.value.tipo_doc,
      numero_doc:this.addressForm.value.numero_doc,
    }

    let numero_doc = this.addressForm.value.numero_doc;
    localStorage.setItem("NumeroDoc",numero_doc);

    this.personaService.postPersonas(persona);
    this.router.navigate(['/pasajeros']);
  }


}
