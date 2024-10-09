import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContenidosProvider {
  // private pathRoute: String="https://api.test.dgrcorrientes.gov.ar/cms/"; // TEST
  private pathRoute: string = "https://api.dgrcorrientes.gov.ar/cms/"; // PROD

  constructor(private http: HttpClient) {
    console.log('Hello ContenidosProvider Provider');
  }

  public novedades(categoria: number, start: number, length: number): Observable<any> {
    // const url = `${this.pathRoute}cmsDGRs/listaContenidosXCategoria?categoria=${categoria}&start=${start}&length=${length}`;
    // return this.http.get(url).pipe(
    //   map((response: any) => {
    //     return response;
    //   })
    // );
    return new Observable((observer) => {
      observer.next([
        {
          id: 1,
          titulo: 'Título de la novedad 1',
          descripcion: 'Descripción de la novedad 1',
          imagen: 'https://via.placeholder.com/150',
          fecha: '2021-06-01',
          autor: 'Autor de la novedad 1'
        },
        {
          id: 2,
          titulo: 'Título de la novedad 2',
          descripcion: 'Descripción de la novedad 2',
          imagen: 'https://via.placeholder.com/150',
          fecha: '2021-06-02',
          autor: 'Autor de la novedad 2'
        },
        {
          id: 3,
          titulo: 'Título de la novedad 3',
          descripcion: 'Descripción de la novedad 3',
          imagen: 'https://via.placeholder.com/150',
          fecha: '2021-06-03',
          autor: 'Autor de la novedad 3'
        }
      ]);
    }
    );

  }

  public leerNovedad(id: number): Observable<any> {
    // const url = `${this.pathRoute}cmsDGRs/leerNovedad?id=${id}`;
    // return this.http.get(url).pipe(
    //   map((response: any) => {
    //     return response;
    //   })
    // );
    return new Observable((observer) => {
      observer.next({
        id: 1,
        titulo: 'Título de la novedad',
        descripcion: 'Descripción de la novedad',
        imagen: 'https://via.placeholder.com/150',
        fecha: '2021-06-01',
        autor: 'Autor de la novedad'
      });
    });
  }
}