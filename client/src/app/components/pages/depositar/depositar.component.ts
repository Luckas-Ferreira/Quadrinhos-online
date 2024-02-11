import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Money } from 'src/app/interfaces/money';
import { MoneyService } from 'src/app/services/money.service';

@Component({
  selector: 'app-depositar',
  templateUrl: './depositar.component.html',
  styleUrls: ['./depositar.component.css']
})
export class DepositarComponent implements OnInit{
  formDeposito!: FormGroup;
  fraseAlert: string = '';

  constructor(private Depositar: MoneyService){}
  ngOnInit(): void {
    this.formDeposito = new FormGroup({
      valor: new FormControl('', [Validators.required])
    })
  }

  get valor() {
    return this.formDeposito.get('valor')!;
  }
  depositar(){
    if(this.formDeposito.get('valor')!.valid){
       this.Depositar.depositarMoney({valor: this.formDeposito.get('valor')!.value}).subscribe((response: Money) => {
         if(response.ok){
           window.location.href = 'inicio';
         }else{
          this.fraseAlert = response.message;
           const alert = document.getElementById('error');
          alert!.classList.remove('d-none');
         setTimeout(() => {
          alert!.classList.add('d-none');
       }, 7000);
       }
   })
    }
  }
}
