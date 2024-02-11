import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesModule } from './components/pages/pages.module';
import { PagesComponent } from './components/pages/pages.component';
import { AdmModule } from './components/adm/adm.module';
import { AdmComponent } from './components/adm/adm.component';
import { ShowQuandrinhosComponent } from './components/pages/show-quandrinhos/show-quandrinhos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DepositarComponent } from './components/pages/depositar/depositar.component';

@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    AdmComponent,
    DepositarComponent,
    ShowQuandrinhosComponent,
  ],
  imports: [
    PagesModule,
    AdmModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
