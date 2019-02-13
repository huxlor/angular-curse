import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID , NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CapitalizadoPipe } from './pipes/capitalizado.pipe';

import locales from '@angular/common/locales/es';

import { registerLocaleData } from '@angular/common';
import { DomseguroPipe } from './pipes/domseguro.pipe';
import { ContasenaPipe } from './pipes/contasena.pipe';
registerLocaleData(locales);


@NgModule({
  declarations: [
    AppComponent,
    CapitalizadoPipe,
    DomseguroPipe,
    ContasenaPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [{provide: LOCALE_ID, useValue: 'es'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
