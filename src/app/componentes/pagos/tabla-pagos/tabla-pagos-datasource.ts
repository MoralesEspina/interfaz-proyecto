import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface TablaPagosItem {
  numero_factura: string;
  id_boleto: string;
  costo_total: string;
  Tarjeta_Credito: string;
  Nombre_Propietario: string;
  Fecha_Exp: string;
  cvv: string;
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: TablaPagosItem[] = [];

/**
 * Data source for the TablaPagos view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class TablaPagosDataSource extends DataSource<TablaPagosItem> {
  data: TablaPagosItem[] = [];
  paginator: MatPaginator | undefined;
  sort: MatSort | undefined;

  constructor() {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<TablaPagosItem[]> {
    if (this.paginator && this.sort) {
      // Combine everything that affects the rendered data into one update
      // stream for the data-table to consume.
      return merge(observableOf(this.data), this.paginator.page, this.sort.sortChange)
        .pipe(map(() => {
          return this.getPagedData(this.getSortedData([...this.data ]));
        }));
    } else {
      throw Error('Please set the paginator and sort on the data source before connecting.');
    }
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect(): void {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: TablaPagosItem[]): TablaPagosItem[] {
    if (this.paginator) {
      const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
      return data.splice(startIndex, this.paginator.pageSize);
    } else {
      return data;
    }
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: TablaPagosItem[]): TablaPagosItem[] {
    if (!this.sort || !this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort?.direction === 'asc';
      switch (this.sort?.active) {
        case 'numero_factura': return compare(a.numero_factura, b.numero_factura, isAsc);
        case 'id_boleto': return compare(+a.id_boleto, +b.id_boleto, isAsc);
        case 'costo_total': return compare(+a.costo_total, +b.costo_total, isAsc);
        case 'Tarjeta_Credito': return compare(+a.Tarjeta_Credito, +b.Tarjeta_Credito, isAsc);
        case 'Nombre_Propietario': return compare(+a.Nombre_Propietario, +b.Nombre_Propietario, isAsc);
        case 'Fecha_Exp': return compare(+a.Fecha_Exp, +b.Fecha_Exp, isAsc);
        case 'cvv': return compare(+a.cvv, +b.cvv, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number | Date, b: string | number| Date, isAsc: boolean): number {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
