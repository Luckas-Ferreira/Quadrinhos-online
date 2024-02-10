import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

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
    throw new Error('Method not implemented.');
  }
  depositar(){
    if(this.formDeposito.get('valor')!.valid){
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
