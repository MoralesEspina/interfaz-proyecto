import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface TablaVDisponibleItem {
  'nombre': string,
  'origen': string,
  'destino': string,
  'distancia_viaje': string,
  'tiempo_viaje': string,
  'precio_base': string,
  'fecha_hora_salida': string,
  'descripcion': string,

}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: TablaVDisponibleItem[] = [];

/**
 * Data source for the TablaVDisponible view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class TablaVDisponibleDataSource extends DataSource<TablaVDisponibleItem> {
  data: TablaVDisponibleItem[] = [];
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
  connect(): Observable<TablaVDisponibleItem[]> {
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
  private getPagedData(data: TablaVDisponibleItem[]): TablaVDisponibleItem[] {
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
  private getSortedData(data: TablaVDisponibleItem[]): TablaVDisponibleItem[] {
    if (!this.sort || !this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort?.direction === 'asc';
      switch (this.sort?.active) {
        case 'nombre': return compare(a.nombre, b.nombre, isAsc);
        case 'origen': return compare(+a.origen, +b.origen, isAsc);
        case 'destino': return compare(+a.destino, +b.destino, isAsc);
        case 'distancia_viaje': return compare(+a.distancia_viaje, +b.distancia_viaje, isAsc);
        case 'tiempo_viaje': return compare(+a.tiempo_viaje, +b.tiempo_viaje, isAsc);
        case 'precio_base': return compare(+a.precio_base, +b.precio_base, isAsc);
        case 'fecha_hora_salida': return compare(+a.fecha_hora_salida, +b.fecha_hora_salida, isAsc);
        case 'descripcion': return compare(+a.descripcion, +b.descripcion, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number | Date, b: string | number| Date, isAsc: boolean): number {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
