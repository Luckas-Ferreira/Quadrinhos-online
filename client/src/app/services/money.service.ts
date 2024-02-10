import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Money } from '../interfaces/money';

@Injectable({
  providedIn: 'root'
})
export class MoneyService {
  private DepositarMoney = depositar.depositarMoney;
  private GetMoney = depositar.getMoney;
  private RetirarMoney = depositar.retirarMoney;

  constructor(private http: HttpClient) { }

  depositarMoney(object: object): Observable<Money>{
    return this.http.post<Money>(this.DepositarMoney, object)
  }
  retirarMoney(object: object): Observable<Money>{
    return this.http.post<Money>(this.RetirarMoney, object)
  }
  getMoney(): Observable<Money>{
    return this.http.post<Money>(this.GetMoney, [])
  }
}
