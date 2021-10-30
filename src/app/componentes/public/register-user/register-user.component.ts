import { Usuario } from 'src/app/componentes/interfaces/usuario';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterUserService } from '../../services/registerUser.service';
import { Persona } from '../../interfaces/persona';


@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})

export class RegisterUserComponent {
  user: Usuario = {
    id_persona:0,
    rol:1,
    userName:'',
    password: ''
  };

  _persona : Persona ={
    id_persona:0,
    nombres: '',
    apellidos:'',
    tipo_doc: '',
    numero_doc: localStorage.getItem("NumeroDoc")
  }

  addressForm = this.fb.group({

    userName: [null, Validators.required],
    password: [null, Validators.required],

  });

  hasUnitNumber = false;

  constructor(private fb: FormBuilder,private _userRegister: RegisterUserService, private _router:Router) {

    this.obtenerID();
  }
  obtenerID(){

    this._userRegister.getId(this._persona).subscribe(
    res => {
      this._persona = res[0];
      console.log(res[0]);
    },
    err => console.log(err)
  )
  }

  crearUsuario() {

      const _user: Usuario = {
        id_persona: this._persona.id_persona,
        userName: this.addressForm.value.userName,
        password: this.addressForm.value.password,
        rol: this.user.rol,
      }
      console.log(_user);
      this._userRegister.register(_user);
      localStorage.removeItem('NumeroDoc');
      this._router.navigate(['']);
  }



}
