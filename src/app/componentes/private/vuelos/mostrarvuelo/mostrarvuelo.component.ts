import { Router } from '@angular/router';
import { VuelocrudService, VuelosDisponibles } from '../../../services/vuelocrud.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { mantVuelo } from 'src/app/componentes/interfaces/mantVuelo';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-mostrarvuelo',
  templateUrl: './mostrarvuelo.component.html',
  styleUrls: ['./mostrarvuelo.component.css']
})
export class MostrarvueloComponent implements OnInit {

  //
  ListaVuelos!: VuelosDisponibles[];
  constructor(private VuelocrudService: VuelocrudService, private router: Router) {

  }
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource(this.ListaVuelos);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.obtenerVuelos();

  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;

  }

  obtenerVuelos() {
    this.VuelocrudService.getVuelo().subscribe(
      res => {
        console.log(res);
        this.ListaVuelos = res;
      },
      err => console.log(err)
    );
  }

  modificarVuelo(id_vuelo: string) {
    this.router.navigate(['/modificarvuelo/' + id_vuelo])
  }

  eliminarVuelo(id_vuelo: string) {
    this.VuelocrudService.deleteVuelo(id_vuelo);
    setTimeout(location.reload.bind(location),600);
  }

  OnNuevoVuelo() {
  this.router.navigate(['/agregarVuelo']);
  }
  actualizar(){
    setTimeout(location.reload.bind(location),200);
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
