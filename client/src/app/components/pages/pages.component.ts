import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Alugar } from 'src/app/interfaces/alugar';
import { Money } from 'src/app/interfaces/money';
import { DataSharingService } from 'src/app/services/data-sharing.service';
import { MoneyService } from 'src/app/services/money.service';
import { RentQHService } from 'src/app/services/rent-qh.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit{
  dataMoney!: number;
  fraseAlert: string = '';
  total: number = 0;
  dataQuadrinho: Alugar[] = []; 
  constructor(private Alugar: RentQHService,private Depositar: MoneyService, private router: Router, private shared: DataSharingService){}
  
  ngOnInit(): void {
    this.shared.currentQuadrinho.subscribe(quadrinho => {
      this.dataQuadrinho = quadrinho
      this.calculateTotal();
      
    });
    this.Depositar.getMoney().subscribe((response: Money) => {
      if(response.ok){
        this.dataMoney = response.valor;
      }else{
        this.router.navigateByUrl('/depositar');
      }
    })
  }

  calculateTotal() {
    this.total = 0;
    for (let quadrinho of this.dataQuadrinho) {
      this.total += quadrinho.valor;
    }
  }

  alugar(){
    if(this.dataQuadrinho.length > 0){
      let saldoTotal = 0
      let alugar = this.dataQuadrinho.map(quadrinho => {
        saldoTotal += quadrinho.valor;
        return {quadrinho_id: quadrinho.quadrinho_id};
      });
      let alugados = {
        quadrinhos: alugar 
      }
      if(this.dataMoney > saldoTotal){
        saldoTotal =  this.dataMoney - saldoTotal
        this.Alugar.alugar({quadrinhos: alugados.quadrinhos, valor: saldoTotal}).subscribe((response: Alugar) => {
          if(response.ok){
            this.fraseAlert = response.message
            const alert = document.getElementById('True');
            alert!.classList.remove('d-none');
            setTimeout(() => {
              alert!.classList.add('d-none');
            }, 4000);
          }else{
            this.fraseAlert = response.message
            const alert = document.getElementById('False');
            alert!.classList.remove('d-none');
            setTimeout(() => {
              alert!.classList.add('d-none');
            }, 4000);
          }
        })
      }this.fraseAlert = 'Saldo insuficiente'
        const alert = document.getElementById('False');
        alert!.classList.remove('d-none');
        setTimeout(() => {
          alert!.classList.add('d-none');
        }, 4000);
      
    }
    
  }

  sacarValor(){
    this.Depositar.retirarMoney().subscribe((response: Money) => {
      if(response.ok){
        this.dataMoney = response.valor;
        this.fraseAlert = "Saque realizado com sucesso"
        const alert = document.getElementById('True');
        alert!.classList.remove('d-none');
        setTimeout(() => {
          alert!.classList.add('d-none');
        }, 4000);
      }else{
        this.fraseAlert = response.message
        const alert = document.getElementById('False');
        alert!.classList.remove('d-none');
        setTimeout(() => {
          alert!.classList.add('d-none');
        }, 4000);
      }
    })
  }
}
