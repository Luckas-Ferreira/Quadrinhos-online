import { Injectable } from '@angular/core';
import { Alugar } from '../interfaces/alugar';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Aluguel } from '../environments/aluguel';

@Injectable({
  providedIn: 'root'
})
export class RentQHService {
  private GetAlugar = Aluguel.getAlugar;
  private Alugar = Aluguel.alugar;
  private LimparAlugados = Aluguel.limparAlugados;

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
