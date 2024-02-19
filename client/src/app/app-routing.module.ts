import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmComponent } from './components/adm/adm.component';
import { DepositarComponent } from './components/pages/depositar/depositar.component';
import { PagesComponent } from './components/pages/pages.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';

const routes: Routes = [
  { path: 'admin',component: AdmComponent},
  { path: 'depositar',component: DepositarComponent},
  {path: '', component: PagesComponent}, 
  { path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
