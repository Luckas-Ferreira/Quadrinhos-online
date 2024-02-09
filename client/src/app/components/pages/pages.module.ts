import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { DepositarComponent } from './depositar/depositar.component';
import { ShowQuandrinhosComponent } from './show-quandrinhos/show-quandrinhos.component';

@NgModule({
  declarations: [
    DepositarComponent,
    ShowQuandrinhosComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
