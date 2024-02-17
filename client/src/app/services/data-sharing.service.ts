import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Alugar } from '../interfaces/alugar';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {

  private QuadrinhoSource = new Subject<Alugar[]>();
  currentQuadrinho = this.QuadrinhoSource.asObservable();

  constructor() { }

  changeQuadrinhos(Quadrinhos: Alugar[]) {
    this.QuadrinhoSource.next(Quadrinhos);
  }
}
