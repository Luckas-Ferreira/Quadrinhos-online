import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdmRoutingModule } from './adm-routing.module';
import { ShowAgendadosComponent } from './show-agendados/show-agendados.component';
import { CreateHQComponent } from './create-hq/create-hq.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ShowAgendadosComponent,
    CreateHQComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AdmRoutingModule
  ]
})

export class AdmModule { }
