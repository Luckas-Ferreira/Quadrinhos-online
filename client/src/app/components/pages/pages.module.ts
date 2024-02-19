import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { SeeQuadrinhoComponent } from './show-quandrinhos/see-quadrinho/see-quadrinho.component';
import { ModalModule } from 'ngx-bootstrap/modal';
@NgModule({
  declarations: [
    SeeQuadrinhoComponent
  ],
  imports: [
    CommonModule,
    ModalModule.forRoot(),
    PagesRoutingModule
  ]
})
export class PagesModule { }
