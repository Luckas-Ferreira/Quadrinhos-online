import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { quadrinho } from '../environments/quadrinho';
import { Quadrinho } from '../interfaces/quadrinho';

@Injectable({
  providedIn: 'root'
})
export class QuadrinhoService {
  private GetQuadrinho = quadrinho.getQuadrinho;
  private GetQuadrinhos = quadrinho.getQuadrinhos;
  private CreateQuadrinho = quadrinho.createQuadrinho;
  private DeleteQuadrinho = quadrinho.deleteQuadrinho;

  constructor(private http: HttpClient) { }

  getQuadrinho(id: number): Observable<Quadrinho>{
    return this.http.post<Quadrinho>(this.GetQuadrinho, id)
  }
  getQuadrinhos(): Observable<Quadrinho>{
    return this.http.post<Quadrinho>(this.GetQuadrinhos, [])
  }
  createQuadrinho(data: FormData): Observable<Quadrinho>{
    return this.http.post<Quadrinho>(this.CreateQuadrinho, data)
  }
  deleteQuadrinho(object: object): Observable<Quadrinho>{
    return this.http.post<Quadrinho>(this.DeleteQuadrinho, object)
  }
}
