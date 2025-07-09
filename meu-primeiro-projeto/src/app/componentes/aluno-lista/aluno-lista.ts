import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AlunoInterface } from '../../interfaces/AlunoInterface';

@Component({
  selector: 'app-aluno-lista',
  standalone: false,
  templateUrl: './aluno-lista.html',
  styleUrl: './aluno-lista.css'
})
export class AlunoLista {

  @Output()
  excluir: EventEmitter<number> = new EventEmitter();

  @Input()
  lista: AlunoInterface[] = [];

  excluirAluno(matricula: number): void {
    this.excluir.emit(matricula);
  }

}
