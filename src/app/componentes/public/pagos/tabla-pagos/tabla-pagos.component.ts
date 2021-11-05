import { PagosService } from './../../../services/pagos.service';
import { Router } from '@angular/router';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { TablaPagosDataSource, TablaPagosItem } from './tabla-pagos-datasource';
/* */
@Component({
  selector: 'app-tabla-pagos',
  templateUrl: './tabla-pagos.component.html',
  styleUrls: ['./tabla-pagos.component.css']
})
export class TablaPagosComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<TablaPagosItem>;
  dataSource: TablaPagosDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['numero_factura', 'id_boleto', 'costo_total', 'Tarjeta_Credito', 'Nombre_Propietario', 'Fecha_Exp', 'cvv'];

  constructor(private _pagoService:PagosService, private Router:Router) {
    this.dataSource = new TablaPagosDataSource();
  }

  ngOnInit(){
    this.dataSource = new TablaPagosDataSource();
    this._pagoService.getPagos().subscribe(
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
