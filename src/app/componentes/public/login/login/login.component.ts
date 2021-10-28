import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/componentes/interfaces/usuario';
import { SecurityService } from 'src/app/componentes/services/security.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  _usuario: Usuario = {
    id: 0,
    userName: '',
    password: ''
  };

  addressForm = this.fb.group({

    userName: [null, Validators.required],
    password: [null, Validators.required],

  });

  hasUnitNumber = false;

  constructor(private fb: FormBuilder, private _security: SecurityService, private _router: Router) {}

  onLogin() {
    this._security.login(this._usuario).subscribe(
      (res) =>{
        localStorage.setItem('token', res.token);
        this._router.navigate(['inicio']);
      }
    )
  }
}
