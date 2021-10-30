import { Router } from '@angular/router';
import { ApiService } from './../../services/api.service';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { TablaRutasDataSource, TablaRutasItem } from './tabla-rutas-datasource';

@Component({
  selector: 'app-tabla-rutas',
  templateUrl: './tabla-rutas.component.html',
  styleUrls: ['./tabla-rutas.component.css']
})
export class TablaRutasComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<TablaRutasItem>;
  dataSource: TablaRutasDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id_ruta', 'precio_base', 'distancia_viaje', 'tiempo_viaje', 'fecha_creacion', 'origen', 'destino'];

  constructor(private ApiService:ApiService, private Router:Router) {
    this.dataSource = new TablaRutasDataSource();
  }

  ngOnInit(){
    this.dataSource = new TablaRutasDataSource();
    this.ApiService.getrutas().subscribe(
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
