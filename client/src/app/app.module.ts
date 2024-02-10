import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesModule } from './components/pages/pages.module';
import { PagesComponent } from './components/pages/pages.component';
import { AdmModule } from './components/adm/adm.module';
import { AdmComponent } from './components/adm/adm.component';
import { ShowQuandrinhosComponent } from './components/pages/show-quandrinhos/show-quandrinhos.component';


@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    AdmComponent,
    ShowQuandrinhosComponent,
  ],
  imports: [
    PagesModule,
    AdmModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
