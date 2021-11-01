import { Router } from '@angular/router';
import { VuelocrudService } from './../../services/vuelocrud.service';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { MostrarvueloDataSource, MostrarvueloItem } from './mostrarvuelo-datasource';

@Component({
  selector: 'app-mostrarvuelo',
  templateUrl: './mostrarvuelo.component.html',
  styleUrls: ['./mostrarvuelo.component.css']
})
export class MostrarvueloComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<MostrarvueloItem>;
  dataSource: MostrarvueloDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id_vuelo', 'id_ruta', 'id_avion', 'fecha_salida', 'id_estado'];

  constructor(private VuelocrudService:VuelocrudService, private Router:Router) {
    this.dataSource = new MostrarvueloDataSource();
  }

  ngOnInit() {
    this.dataSource = new MostrarvueloDataSource();
    this.VuelocrudService.getvuelo().subscribe(
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
