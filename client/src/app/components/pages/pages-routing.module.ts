import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { ShowQuandrinhosComponent } from './show-quandrinhos/show-quandrinhos.component';
import { SeeQuadrinhoComponent } from './show-quandrinhos/see-quadrinho/see-quadrinho.component';

const routes: Routes = [
  {
  path: '',  
  component: PagesComponent, 
  children: [
    { path: 'inicio',component: ShowQuandrinhosComponent},
    { path: 'ver/quadrinho/:id', component: SeeQuadrinhoComponent},
    { path: '', redirectTo: 'inicio', pathMatch: 'prefix'}
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
