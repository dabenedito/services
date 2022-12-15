import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CursosComponent } from './cursos/cursos.component';

import { LogService } from './shared/services/log.service';
import { CriarCursoModule } from './criar-curso/criar-curso.module';

@NgModule({
  declarations: [
    AppComponent,
    CursosComponent,
  ],
  imports: [
    BrowserModule,
    CriarCursoModule,
  ],
  providers: [
    LogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
