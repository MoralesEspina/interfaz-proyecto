import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Persona } from '../../interfaces/persona';
import { RegisterService } from '../../services/register.service';

interface TipoDoc {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {

  _persona: Persona = {
    id_persona:0,
    nombres: '',
    apellidos:'',
    tipo_doc: '',
    numero_doc: ''
  };

  addressForm = this.fb.group({

    nombres: [null, Validators.required],
    apellidos: [null, Validators.required],
    tipo_doc: [null, Validators.required],
    numero_doc: null,
  });

  _tipoDoc: TipoDoc[] = [
    {value: 'DPI', viewValue: 'DPI'},
    {value: 'Pasaporte', viewValue: 'Pasaporte'},
    {value: 'VISA', viewValue: 'VISA'}
  ];

  hasUnitNumber = false;

  createpeople: boolean = false;

  constructor(private fb: FormBuilder,private _personaRegister: RegisterService, private _router:Router) {}

  crearPersona() {
    const persona: Persona = {
      id_persona: 0,
      nombres: this.addressForm.value.nombres,
      apellidos: this.addressForm.value.apellidos,
      tipo_doc: this.addressForm.value.tipo_doc,
      numero_doc: this.addressForm.value.numero_doc
    }

    console.log(persona);
    this._personaRegister.register(persona);

    let numero_doc = this.addressForm.value.numero_doc;
    localStorage.setItem("NumeroDoc",numero_doc);
    this._router.navigate(['/register_user']);

  }
}
