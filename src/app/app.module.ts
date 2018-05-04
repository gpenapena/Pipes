import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
//import { NgModule } from '@angular/core';
import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
import {capitalizadoPipe} from './pipes/capitalizado.pipe';
registerLocaleData(localeEs);


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    capitalizadoPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'es' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
