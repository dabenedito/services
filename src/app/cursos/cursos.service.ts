import { EventEmitter, Injectable } from '@angular/core';

import { LogService } from '../shared/services/log.service';

@Injectable()
export class CursosService {
  static count: number = 0;
  private cursos: Array<string> = [ 'Angualr 2', 'Laravel', 'PHP', 'React Native' ];

  emitirCursoCriado = new EventEmitter<string>();
  static criouNovoCurso = new EventEmitter<string>();

  constructor(private logService: LogService) {
    CursosService.count++;
    console.log(`CursoServices: ${ CursosService.count }`);
  }

  getCursos(): Array<string> {
    this.logService.consoleLog('Obtendo lista de cursos');
    return this.cursos
  }

  addCurso(curso: string) {
    this.logService.consoleLog(`Criando um novo curso: ${curso}`);
    this.cursos.push(curso);
    this.emitirCursoCriado.emit(curso);
    CursosService.criouNovoCurso.emit(curso);
  }
}
