import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdmRoutingModule } from './adm-routing.module';
import { ShowAgendadosComponent } from './show-agendados/show-agendados.component';

@NgModule({
  declarations: [
    ShowAgendadosComponent
  ],
  imports: [
    CommonModule,
    AdmRoutingModule
  ]
})

export class AdmModule { }
