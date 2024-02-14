import { Component, OnInit } from '@angular/core';
import { Quadrinho } from 'src/app/interfaces/quadrinho';
import { QuadrinhoService } from 'src/app/services/quadrinho.service';
import { Base } from 'src/app/environments/baseUrl';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-quandrinhos',
  templateUrl: './show-quandrinhos.component.html',
  styleUrls: ['./show-quandrinhos.component.css']
})
export class ShowQuandrinhosComponent implements OnInit{
  baseUrl = Base.url;
  fraseAlert: string = '';
  dataQuadrinho!: Quadrinho[];
  constructor(private quadrinho: QuadrinhoService, private router: Router){}

  ngOnInit(): void {
    this.quadrinho.getQuadrinhos().subscribe((response: Quadrinho) => {
      if(response.ok){
        this.dataQuadrinho = response.quadrinhos
      }
    })
  }

  deleteQuadrinho(quadrinho_id: number){
    console.log('buceta');
    
    // this.quadrinho.deleteQuadrinho({quadrinho_id: quadrinho_id}).subscribe((response: Quadrinho) => {
    //   if(response.ok){
    //     this.fraseAlert = 'Quadrinho removido com sucesso'!;
    //       const alert = document.getElementById('true');
    //       alert!.classList.remove('d-none');
    //       setTimeout(() => {
    //         alert!.classList.add('d-none')}, 4000);
    //   }else{
    //     this.fraseAlert = response.message;
    //     const alert = document.getElementById('false');
    //     alert!.classList.remove('d-none');
    //     setTimeout(() => {
    //       alert!.classList.add('d-none')}, 4000);
    //   }
    // })
  }

  get Router(){
    return this.router.url;
  }
}
