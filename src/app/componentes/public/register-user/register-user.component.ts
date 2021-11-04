import { Usuario } from 'src/app/componentes/interfaces/usuario';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterUserService } from '../../services/registerUser.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})

export class RegisterUserComponent {
  user: Usuario = {
    rol: "",
    userName:'',
    password: ''
  };

  addressForm = this.fb.group({
    userName: [null, Validators.required],
    password: [null, Validators.required],

  });

  hasUnitNumber = false;

  constructor(private fb: FormBuilder,private _userRegister: RegisterUserService, private _router:Router) {

  }

  crearUsuario() {

      const _user: Usuario = {
        userName: this.addressForm.value.userName,
        password: this.addressForm.value.password,
        rol: this.user.rol,
      }
      console.log(_user);
      this._userRegister.register(_user);
      this._router.navigate(['']);
  }



}
