import { Router } from '@angular/router';
import { ApiService } from './../shared/api.service';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { TablaVDisponibleDataSource, TablaVDisponibleItem } from './tabla-vdisponible-datasource';

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

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['nombre', 'origen', 'destino', 'distancia_viaje', 'tiempo_viaje', 'precio_base', 'fecha_hora_salida', 'descripcion', 'Acciones'];

  constructor(private ApiService:ApiService, private Router:Router) {
    this.dataSource = new TablaVDisponibleDataSource();
  }

  ngOnInit(){
    this.dataSource = new TablaVDisponibleDataSource();
    this.ApiService.getVuelos().subscribe(
      (res:any) => {
        console.log(res);
        this.dataSource.data = res;
      }
    )


  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
