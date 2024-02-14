import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Quadrinho } from 'src/app/interfaces/quadrinho';
import { QuadrinhoService } from 'src/app/services/quadrinho.service';
import { Base } from 'src/app/environments/baseUrl';
@Component({
  selector: 'app-see-quadrinho',
  templateUrl: './see-quadrinho.component.html',
  styleUrls: ['./see-quadrinho.component.css']
})
export class SeeQuadrinhoComponent implements OnInit{
  baseUrl = Base.url;
  dataQuadrinho!: Quadrinho['quadrinho'];

  constructor(private router: Router, private route: ActivatedRoute, private quadrinho: QuadrinhoService){}
  ngOnInit(): void {
    
    this.route.params.subscribe(params => {
      if(Number(params['id'])){
        this.getQuadrinho(params['id'])
      }
    });
  }

  get Router(){
    return this.router.url;
  }
  getQuadrinho(quadrinho_id: number){
    this.quadrinho.getQuadrinho({quadrinho_id: quadrinho_id}).subscribe((response: any) => {
      if(response.ok){
        this.dataQuadrinho = response.quadrinho[0];
      }else{
        
      }
    })
  }

}
