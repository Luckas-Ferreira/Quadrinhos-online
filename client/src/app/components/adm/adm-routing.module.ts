import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmComponent } from './adm.component';
import { ShowAgendadosComponent } from './show-agendados/show-agendados.component';
import { ShowQuandrinhosComponent } from '../pages/show-quandrinhos/show-quandrinhos.component';
import { CreateHQComponent } from './create-hq/create-hq.component';
import { SeeQuadrinhoComponent } from '../pages/show-quandrinhos/see-quadrinho/see-quadrinho.component';

const routes: Routes = [
  {
    path: 'admin', 
    component: AdmComponent, 
    children: [
      { path: 'agendados', component: ShowAgendadosComponent},
      { path: 'adicionar', component: CreateHQComponent},
      { path: 'quadrinho/ver/:id', component: SeeQuadrinhoComponent},
      { path: 'quadrinhos', component: ShowQuandrinhosComponent},
      {path: '', pathMatch:'prefix', redirectTo:'agendados'}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdmRoutingModule { }
