import { ListaRutaCrudService } from 'src/app/componentes/Rutas/services/listaruta-crud.service';
import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Ruta } from "src/app/componentes/Rutas/models/Ruta";
import { tap } from "rxjs/operators";
import { Time } from "@angular/common";

@Component({
  selector: "app-lista-ruta",
  templateUrl: "./listaruta.component.html",
  styleUrls: ["./listaruta.component.scss"],
})
export class ListarutaListComponent implements OnInit {
  rutaa!: Observable<Ruta[]>;

  constructor(private listarutaCrudService: ListaRutaCrudService) {}

  ngOnInit(): void {
    this.rutaa! = this.fetchAll();
  }

  fetchAll(): Observable<Ruta[]> {
    return this.listarutaCrudService.fetchAll();
  }

  post(destinoNombre: Partial<Ruta>): void {
    const destino = (<string>destinoNombre).trim();
    if (!destino) return;

    this.rutaa! = this.listarutaCrudService
      .post({ destino })
      .pipe(tap(() => (this.rutaa! = this.fetchAll())));
  }

  update(id_ruta: number,precio_base: number,distancia_viaje: number,tiempo_viaje:Date,fecha_creacion:Date, newdestino: Partial<Ruta>): void {
    const destino = (<string>newdestino).trim();
    const origen = (<string>newdestino).trim();
    if (!destino) return;

    const newruta: Ruta = {
      id_ruta,
      precio_base,
      distancia_viaje,
      tiempo_viaje,
      fecha_creacion,
      origen,
      destino,
    };

    this.rutaa! = this.listarutaCrudService
      .update(newruta)
      .pipe(tap(() => (this.rutaa! = this.fetchAll())));
  }

  delete(id_ruta: number): void {
    this.rutaa! = this.listarutaCrudService
      .delete(id_ruta)
      .pipe(tap(() => (this.rutaa! = this.fetchAll())));
  }
}
