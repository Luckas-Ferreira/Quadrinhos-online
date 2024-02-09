import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { DepositarComponent } from './depositar/depositar.component';
import { ShowQuandrinhosComponent } from './show-quandrinhos/show-quandrinhos.component';
import { NotFoundComponent } from './not-found/not-found.component';


@NgModule({
  declarations: [
    DepositarComponent,
    ShowQuandrinhosComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
