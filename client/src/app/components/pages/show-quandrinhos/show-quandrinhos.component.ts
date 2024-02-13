import { Component, OnInit } from '@angular/core';
import { Quadrinho } from 'src/app/interfaces/quadrinho';
import { QuadrinhoService } from 'src/app/services/quadrinho.service';
import { Base } from 'src/app/environments/baseUrl';

@Component({
  selector: 'app-show-quandrinhos',
  templateUrl: './show-quandrinhos.component.html',
  styleUrls: ['./show-quandrinhos.component.css']
})
export class ShowQuandrinhosComponent implements OnInit{
  baseUrl = Base.url;
  dataQuadrinho!: Quadrinho[];
  constructor(private quadrinho: QuadrinhoService){}

  ngOnInit(): void {
    this.quadrinho.getQuadrinhos().subscribe((response: Quadrinho) => {
      if(response.ok){
        this.dataQuadrinho = response.quadrinhos
      }
    })
  }
}
