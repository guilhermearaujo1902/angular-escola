import { Component, Input } from '@angular/core';
import { AlunoInterface } from '../../interfaces/AlunoInterface';

@Component({
  selector: 'app-aluno-form',
  standalone: false,
  templateUrl: './aluno-form.html',
  styleUrl: './aluno-form.css'
})
export class AlunoForm {

  @Input()
  alunoParaEdicao!: AlunoInterface;

  aluno!: AlunoInterface;

}
