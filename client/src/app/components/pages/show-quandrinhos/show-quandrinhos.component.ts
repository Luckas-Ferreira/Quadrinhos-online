import { Component, OnInit, TemplateRef } from '@angular/core';
import { Quadrinho } from 'src/app/interfaces/quadrinho';
import { QuadrinhoService } from 'src/app/services/quadrinho.service';
import { Base } from 'src/app/environments/baseUrl';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { DataSharingService } from 'src/app/services/data-sharing.service';
import { Alugar } from 'src/app/interfaces/alugar';

@Component({
  selector: 'app-show-quandrinhos',
  templateUrl: './show-quandrinhos.component.html',
  styleUrls: ['./show-quandrinhos.component.css']
})
export class ShowQuandrinhosComponent implements OnInit{
  baseUrl = Base.url;
  modalRef!: BsModalRef;
  quadrinho_id: number = 0;
  selectQuadrinho: any[] = [];
  fraseAlert: string = '';
  config2 = {
    class: 'modal-dialog-centered'
  }
  dataQuadrinho!: Quadrinho[];
  constructor(private shared: DataSharingService, private quadrinho: QuadrinhoService, private router: Router,private modalService: BsModalService){}

  ngOnInit(): void {
    this.quadrinho.getQuadrinhos().subscribe((response: Quadrinho) => {
      if(response.ok){
        this.dataQuadrinho = response.quadrinhos
      }
    })
  }

  openModal(quadrinho_id: any, template: TemplateRef<any>){  
    this.modalRef = this.modalService.show(template, this.config2)
    this.quadrinho_id = quadrinho_id
   }
   
   
  deleteQuadrinho(){
  this.quadrinho.deleteQuadrinho({quadrinho_id: this.quadrinho_id}).subscribe((response: Quadrinho) => {
    if(response.ok){
    this.fraseAlert = 'Quadrinho removido com sucesso'!;
       const alert = document.getElementById('true');
       this.ngOnInit();
       alert!.classList.remove('d-none');
      setTimeout(() => {
         alert!.classList.add('d-none')}, 4000);
   }else{
     this.fraseAlert = response.message;
    const alert = document.getElementById('false');
    alert!.classList.remove('d-none');
     setTimeout(() => {
      alert!.classList.add('d-none')}, 4000);
   }
    this.modalRef.hide();
  })
  }

  alugar(quadrinho_id: Quadrinho){
    if(!this.selectQuadrinho.includes(quadrinho_id)){
      this.selectQuadrinho.push(quadrinho_id)
      this.shared.changeQuadrinhos(this.selectQuadrinho);
    }else{
      this.fraseAlert = "Quadrinho já adicinado ao carrinho";
      const alert = document.getElementById('false');
      alert!.classList.remove('d-none');
        setTimeout(() => {
        alert!.classList.add('d-none')}, 4000);
    }
  }
  get Router(){
    return this.router.url;
  }
}
