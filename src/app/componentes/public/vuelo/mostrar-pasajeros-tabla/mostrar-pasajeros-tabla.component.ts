import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona } from 'src/app/componentes/interfaces/persona';
import { VueloService } from 'src/app/componentes/services/vuelo.service';
import { Pasajero, PasajeroService } from 'src/app/componentes/services/pasajero.service';
import { PersonaService } from 'src/app/componentes/services/persona.service';
import { Vuelo } from 'src/app/componentes/interfaces/vuelo';
import { RegisterService } from 'src/app/componentes/services/register.service';
import { RegisterUserService } from 'src/app/componentes/services/registerUser.service';

export interface Boletos{
  clase: string;
  num_asiento: string;
}

@Component({
  selector: 'app-mostrar-pasajeros-tabla',
  templateUrl: './mostrar-pasajeros-tabla.component.html',
  styleUrls: ['./mostrar-pasajeros-tabla.component.css']
})
export class MostrarPasajerosTablaComponent implements OnInit {

  persona : Persona ={
    id_persona: 0,
    nombres: '',
    apellidos:'',
    tipo_doc: '',
    numero_doc: localStorage.getItem("NumeroDoc")
  }

  genero: any[] = [
    'Femenino', 'Masculino'
  ];

  addressForm = this.fb.group({
    id_pasajero: [''],
    id_persona: ['', Validators.required],
    fecha_nacimiento: ['', Validators.required],
    genero: ['', Validators.required],
    nacionalidad: ['', Validators.required],
    num_asiento: ['', Validators.required],
    clase: ['', Validators.required]
  });

  collection1 = [{'numero': this.getCollection, 'letra': this.getCollection}];
  collection2 = [{'tipo_clase': this.getCollection, 'precio': this.getCollection}];

  ListarVuelo!: Vuelo[];
  constructor(private VueloService:VueloService, private router:Router, private fb: FormBuilder,
    private pasajeroService: PasajeroService, private http:HttpClient, private _personaRegister: RegisterUserService) { }

  ngOnInit(): void {
    this.listarVuelo();
    this.getCollection();
    this.obtenerID();
  }

  getCollection() {
    this.http
      .get<any>('https://aeropuerto-dw.herokuapp.com/asientos').subscribe((res: any) => {
        this.collection1 = res;
      }, error => {
        console.log({ error });
      })
    this.http
      .get<any>('https://aeropuerto-dw.herokuapp.com/clases').subscribe((res: any) => {
        this.collection2 = res;
      }, error => {
        console.log({ error });
      })
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

    const pasajero: Pasajero ={
      id_pasajero:this.addressForm.value.id_pasajero,
      id_persona: '',
      fecha_nacimiento: this.addressForm.value.fecha_nacimiento,
      genero:this.addressForm.value.genero,
      nacionalidad:this.addressForm.value.nacionalidad,
    }
    let pasajeros =  pasajero

    localStorage.setItem("pasajeros", JSON.stringify (pasajeros))

    this.pasajeroService.postPasajeros(pasajero);
    console.log(pasajero);
    /*this.router.navigate(['/vuelo']);*/

  }

  obtenerID(){

    this._personaRegister.getId(this.persona).subscribe(
    res => {
      this.persona = res[0];
      console.log(res[0]);
    },
    err => console.log(err)
  )
  }

}

/*ListarPasajero: Pasajero[] | undefined;

  constructor(private pasajeroService:PasajeroService, private router:Router) {
    this.listarPasajero();
  }

  ngOnInit(): void {
    this.listarPasajero();
  }

  listarPasajero()
  {
    this.pasajeroService.getPasajeros().subscribe(
      res=>{
        console.log(res);
        this.ListarPasajero=<any>res;
      },
      err => console.log(err)
    );
  }

  modificarPasajeros(id:string){
    this.router.navigate(['/editar-pasajeros/'+id]);
    }

  eliminarPasajeros(id:string){
      this.pasajeroService.deletePasajeros(id);
      this.listarPasajero();
      setTimeout(location.reload.bind(location), 200);
  }
 */
