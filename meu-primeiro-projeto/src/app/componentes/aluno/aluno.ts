import { Component, Input } from '@angular/core';
import { AlunoInterface } from '../../interfaces/AlunoInterface';

@Component({
  selector: 'app-aluno',
  standalone: false,
  templateUrl: './aluno.html',
  styleUrl: './aluno.css'
})
export class Aluno {

  @Input()
  aluno!: AlunoInterface;

  ngOnInit(): void {
    this.imprimir();
  }

  imprimir(): void {
    console.log(this.aluno);
  }

}
