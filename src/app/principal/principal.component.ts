import { Component, OnInit } from '@angular/core';
import { TablaDataSource, Ruta } from './tabla-datasource';
import { Ruta1Service } from 'src/app/principal/services/principal.service';



@Component({

  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  dataSource: TablaDataSource;

  displayedColumns = ['iataCode', 'pais', 'ciudad'];


  constructor(private RegistroRuta1: Ruta1Service){
    this.dataSource = new TablaDataSource();}

  ngOnInit()  {
    this.RegistroRuta1.getRuta().subscribe(
      res=>{
        this.dataSource.data= res;
      }
    )

  }

}
