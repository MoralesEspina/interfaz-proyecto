import { Component, OnInit } from '@angular/core';
import { Ruta1Service } from 'src/app/principal/services/principal.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({

  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {


  constructor(private http: HttpClient) {

  }
  selected1: string;
  selected: string;
  collection = [{'iataCode':this.getCollection,'pais':this.getCollection, 'ciudad':this.getCollection}];

  ngOnInit() {
    this.getCollection();

  }

  getCollection() {

    this.http
      .get<any>('https://aeropuerto-dw.herokuapp.com/aeropuertos').subscribe((res: any) => {
        this.collection = res;
      }, error => {
        console.log({ error });
      })
  }



}
