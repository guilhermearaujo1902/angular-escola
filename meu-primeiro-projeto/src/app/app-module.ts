import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Aluno } from './componentes/aluno/aluno';
import { AlunoLista } from './componentes/aluno-lista/aluno-lista';

@NgModule({
  declarations: [
    App,
    Aluno,
    AlunoLista
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
