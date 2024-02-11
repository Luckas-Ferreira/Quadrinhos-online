import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Money } from 'src/app/interfaces/money';
import { MoneyService } from 'src/app/services/money.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit{
  dataMoney!: number;
  constructor(private Depositar: MoneyService, private router: Router){}
  
  ngOnInit(): void {
    this.Depositar.getMoney().subscribe((response: Money) => {
      if(response.ok){
        this.dataMoney = response.valor;
      }else{
        this.router.navigateByUrl('/depositar');
      }
    })
  }

  sacarValor(){
    this.Depositar.retirarMoney().subscribe((response: Money) => {
      if(response.ok){
        this.dataMoney = response.valor;
        const alert = document.getElementById('true');
        alert!.classList.remove('d-none');
        setTimeout(() => {
          alert!.classList.add('d-none');
        }, 4000);
      }else{
        const alert = document.getElementById('false');
        alert!.classList.remove('d-none');
        setTimeout(() => {
          alert!.classList.add('d-none');
        }, 4000);
      }
    })
  }
}
