import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { TablaVDisponibleDataSource, TablaVDisponibleItem } from './tabla-vdisponible-datasource';
import { Ruta } from '../interfaces/ruta';

@Component({
  selector: 'app-tabla-vdisponible',
  templateUrl: './tabla-vdisponible.component.html',
  styleUrls: ['./tabla-vdisponible.component.css']
})
export class TablaVDisponibleComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<TablaVDisponibleItem>;
  dataSource: TablaVDisponibleDataSource;

  _ruta: Ruta = {
    nombre: '',
    origen: 'PTY', //localStorage.getItem("Orig"),
    destino: 'SAL', //localStorage.getItem("Dest"),
    distancia_viaje: '',
    tiempo_viaje: '',
    precio_base: '',
    fecha_salida: '2012-11-11', //localStorage.getItem("Fech"),
    descripcion: '',
    id_vuelo:'',
    id_ruta:'',
  }
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['nombre', 'origen', 'destino', 'distancia_viaje', 'tiempo_viaje', 'precio_base', 'fecha_salida', 'descripcion', 'Acciones'];

  constructor(private ApiService:ApiService, private Router:Router) {
    this.dataSource = new TablaVDisponibleDataSource();

  }

  ngOnInit(){
    this.dataSource = new TablaVDisponibleDataSource();

    this.ApiService.getVuelos2(this._ruta).subscribe(
      res => {
        console.log(res);
        this.dataSource.data = res;
      },
      err => console.log(err)
    )
  }


  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  seleccionarVuelo(vuelo:any,ruta:any){

        localStorage.setItem('id_ruta',ruta);
        localStorage.setItem('id_vuelo',vuelo);


  }

}
