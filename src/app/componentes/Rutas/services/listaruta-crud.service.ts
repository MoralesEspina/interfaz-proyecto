import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import { ErrorHandlerService } from "./error-handler.service";
import { Ruta } from "../models/Ruta";



@Injectable({
  providedIn: "root",
})
export class ListaRutaCrudService {
   URL = "https://github.com/MoralesEspina/interfaz-proyecto.git";

  httpOptions: { headers: HttpHeaders } = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };

  constructor(
    private errorHandlerService: ErrorHandlerService,
    private http: HttpClient
  ) { }

  fetchAll(): Observable<Ruta[]> {
    return this.http
      .get<Ruta[]>(this.URL, { responseType: "json" })
      .pipe(
        tap((_) => console.log("fetched Ruta")),
        catchError(
          this.errorHandlerService.handleError<Ruta[]>("fetchAll", [])
        )
      );
  }

  post(nombre: Partial<Ruta>): Observable<any> {
    return this.http
      .post<Partial<Ruta>>(this.URL, nombre, this.httpOptions)
      .pipe(catchError(this.errorHandlerService.handleError<any>("post")));
  }

  update(aerolinea: Ruta): Observable<any> {
    return this.http
      .put<Ruta>(this.URL, aerolinea, this.httpOptions)
      .pipe(catchError(this.errorHandlerService.handleError<any>("update")));
  }

  delete(id: number): Observable<any> {
    const url = `https://github.com/MoralesEspina/interfaz-proyecto.git`;

    return this.http
      .delete<Ruta>(url, this.httpOptions)
      .pipe(catchError(this.errorHandlerService.handleError<any>("delete")));
  }
}
