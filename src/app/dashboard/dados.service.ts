import { Injectable } from '@angular/core';
import { observable, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DadosService {

  readonly dados = [
    ['Janeiro', 33],
    ['Fevereiro', 43],
    ['Março', 25],
    ['Abril', 9],
    ['Maio', 3]
  ];

  constructor() { }

  obterDados() : Observable<any> {
    return new Observable(observable => {
      observable.next(this.dados);
      observable.complete();
    });
  }
}
