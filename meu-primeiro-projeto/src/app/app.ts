import { Component } from '@angular/core';
import { AlunoInterface } from './interfaces/AlunoInterface';
import { AlunoServico } from './servicos/aluno-servico';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  protected title = 'meu-primeiro-projeto';

  constructor(private servico: AlunoServico){}
  
  listaAlunos!: AlunoInterface[];
  listaFiltro!: AlunoInterface[];

  ngOnInit(): void {
    this.listaFiltro = this.servico.getListaAlunos();
  }

  exibicao: string = 'lista';

  alterarExibicao(): void {
    if (this.exibicao == 'cards') {
      this.exibicao = 'lista';
    } else if (this.exibicao == 'lista') {
      this.exibicao = 'cards';
    }
  }

  filtrarAprovados(): void {

    this.listaFiltro = [];

    this.listaAlunos.forEach(aluno => {
      if (aluno.cadastro == true) {
        this.listaFiltro.push(aluno);
      }
    });

  }

  filtrarReprovados(): void {

    this.listaFiltro = [];

    this.listaFiltro = this.listaAlunos.filter(aluno => {
      return aluno.cadastro == false;
    });

  }

  exibirTodos(): void {
    this.listaFiltro = this.listaAlunos;
  }

  filtraAlunos(filtro: string): void {

    if (filtro == 'aprovados') {
      this.listaFiltro = this.listaAlunos.filter(aluno => { return aluno.cadastro == true });
    } else if (filtro == 'reprovados') {
      this.listaFiltro = this.listaAlunos.filter(aluno => { return aluno.cadastro == false });
    } else if (filtro == 'todos') {
      this.listaFiltro = this.listaAlunos;
    }

  }

  onExcluir(matricula: number): void {
    // Percorrer a lista de alunos
    this.listaAlunos.forEach( (aluno, index) => {
      // Encontrar o aluno com a matrícula igual a do parâmetro recebido
      if (aluno.matricula == matricula) {
        // Remover o aluno da lista 
        this.listaAlunos.splice(index, 1);
      }
    });
  }

}
