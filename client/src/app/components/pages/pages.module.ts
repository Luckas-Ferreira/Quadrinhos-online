import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { SeeQuadrinhoComponent } from './show-quandrinhos/see-quadrinho/see-quadrinho.component';

@NgModule({
  declarations: [
    SeeQuadrinhoComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
