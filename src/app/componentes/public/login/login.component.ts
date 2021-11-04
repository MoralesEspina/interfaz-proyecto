import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/componentes/interfaces/usuario';
import { SecurityService } from 'src/app/componentes/services/security.service';

export interface log{
  rol: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  _usuario: Usuario = {
    userName: '',
    password: '',
    rol:""
  };

  addressForm = this.fb.group({

    userName: [null, Validators.required],
    password: [null, Validators.required],

  });

  hasUnitNumber = false;
  rol: log;

  constructor(private fb: FormBuilder, private _security: SecurityService, private _router: Router) {}

  onLogin() {
    this._security.login(this._usuario).subscribe(
      (res) =>{
        localStorage.setItem('token', res.token);
        this.rol = this.getRol(res.token);
        this._router.navigate(['navcomponent']);
      }
    )
  }

  private getRol(token: string): log{
    return JSON.parse(atob(token.split('.')[1])) as log;
  }
}
