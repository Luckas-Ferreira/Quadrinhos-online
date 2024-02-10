import { Injectable } from '@angular/core';
import { Alugar } from '../interfaces/alugar';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RentQHService {
  private GetAlugar = aluguel.getAlugar;
  private Alugar = aluguel.alugar;
  private LimparAlugados = aluguel.limparAlugados;

  constructor(private http: HttpClient) { }

  getAlugar(): Observable<Alugar>{
    return this.http.post<Alugar>(this.GetAlugar, [])
  }
  alugar(object: object): Observable<Alugar>{
    return this.http.post<Alugar>(this.Alugar, object)
  }
  limparAlugados(object: object): Observable<Alugar>{
    return this.http.post<Alugar>(this.LimparAlugados, object)
  }
}
