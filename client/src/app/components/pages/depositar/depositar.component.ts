import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-depositar',
  templateUrl: './depositar.component.html',
  styleUrls: ['./depositar.component.css']
})
export class DepositarComponent implements OnInit{
  formDeposito!: FormGroup;
  fraseAlert: string = '';

  constructor(){}
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
      window.location.href = 'inicio';
      // this.Depositar.depositarMoney({valor: this.formDeposito.get('valor')!.value}).subscribe((response: Depositar) => {
      //   if(response.ok){
      //     window.location.href = 'inicio';
      //   }else{
      //     this.fraseAlert = response.message!;
      //     const alert = document.getElementById('error');
      //     alert!.classList.remove('d-none');
      //     setTimeout(() => {
      //       alert!.classList.add('d-none');
      //     }, 7000);
      //   }
      // })
    }
  }
}
