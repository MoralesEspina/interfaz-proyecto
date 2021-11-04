import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface TablaRutasItem {
  id_ruta: string;
  precio_base: string;
  distancia_viaje: string;
  tiempo_viaje: string;
  fecha_creacion: string;
  origen: string;
  destino: string;
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: TablaRutasItem[] = [];

/**
 * Data source for the TablaRutas view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class TablaRutasDataSource extends DataSource<TablaRutasItem> {
  data: TablaRutasItem[] = EXAMPLE_DATA;
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
  connect(): Observable<TablaRutasItem[]> {
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
  private getPagedData(data: TablaRutasItem[]): TablaRutasItem[] {
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
  private getSortedData(data: TablaRutasItem[]): TablaRutasItem[] {
    if (!this.sort || !this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort?.direction === 'asc';
      switch (this.sort?.active) {
        case 'id_ruta': return compare(a.id_ruta, b.id_ruta, isAsc);
        case 'precio_base': return compare(+a.precio_base, +b.precio_base, isAsc);
        case 'distancia_viaje': return compare(+a.distancia_viaje, +b.distancia_viaje, isAsc);
        case 'tiempo_viaje': return compare(+a.tiempo_viaje, +b.tiempo_viaje, isAsc);
        case 'fecha_creacion': return compare(+a.fecha_creacion, +b.fecha_creacion, isAsc);
        case 'origen': return compare(+a.origen, +b.origen, isAsc);
        case 'destino': return compare(+a.destino, +b.destino, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number| Date, b: string | number| Date, isAsc: boolean): number {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
