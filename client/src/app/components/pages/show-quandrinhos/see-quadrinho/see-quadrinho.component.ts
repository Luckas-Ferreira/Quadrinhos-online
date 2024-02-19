import { Component, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Quadrinho } from 'src/app/interfaces/quadrinho';
import { QuadrinhoService } from 'src/app/services/quadrinho.service';
import { Base } from 'src/app/environments/baseUrl';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { DataSharingService } from 'src/app/services/data-sharing.service';
@Component({
  selector: 'app-see-quadrinho',
  templateUrl: './see-quadrinho.component.html',
  styleUrls: ['./see-quadrinho.component.css']
})
export class SeeQuadrinhoComponent implements OnInit{
  baseUrl = Base.url;
  modalRef!: BsModalRef;
  selectQuadrinho: any[] = [];
  quadrinho_id: number = 0;
  fraseAlert: string = '';
  dataQuadrinho!: Quadrinho['quadrinho'];
  Quadrinho!: Quadrinho;
  config2 = {
    class: 'modal-dialog-centered'
  }

  constructor(private shared: DataSharingService, private router: Router, private route: ActivatedRoute, private quadrinho: QuadrinhoService,  private modalService: BsModalService){}
  ngOnInit(): void {
    
    this.route.params.subscribe(params => {
      if(Number(params['id'])){
        this.getQuadrinho(params['id'])
      }
    });
  }


  openModal(quadrinho_id: any, template: TemplateRef<any>){  
    this.modalRef = this.modalService.show(template, this.config2)
    this.quadrinho_id = quadrinho_id
   }
   
  get Router(){
    return this.router.url;
  }
  getQuadrinho(quadrinho_id: number){
    this.quadrinho.getQuadrinho({quadrinho_id: quadrinho_id}).subscribe((response: any) => {
      if(response.ok){
        this.dataQuadrinho = response.quadrinho[0];
        this.Quadrinho = response.quadrinho[0]
      }else{
        
      }
    })
  }

  deleteQuadrinho(){
    this.quadrinho.deleteQuadrinho({quadrinho_id: this.quadrinho_id}).subscribe((response: Quadrinho) => {
        if(response.ok){
          this.fraseAlert = 'Quadrinho removido com sucesso'!;
             const alert = document.getElementById('true');
              alert!.classList.remove('d-none');
             setTimeout(() => {
                this.router.navigateByUrl('/admin/quadrinhos')
               alert!.classList.add('d-none')}, 2000);
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

  alugar(quadrinho: Quadrinho){
    if(!this.selectQuadrinho.includes(quadrinho)){
      this.selectQuadrinho.push(quadrinho)
      this.shared.changeQuadrinhos(this.selectQuadrinho);
      quadrinho.alugado = true;
    }else{
      this.fraseAlert = "Quadrinho já adicinado ao carrinho";
      const alert = document.getElementById('false');
      alert!.classList.remove('d-none');
        setTimeout(() => {
        alert!.classList.add('d-none')}, 4000);
    }
  }

}
