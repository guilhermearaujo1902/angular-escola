import { Component } from '@angular/core';
import { AlunoInterface } from './interfaces/AlunoInterface';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  protected title = 'meu-primeiro-projeto';

  exibicao: string = 'lista';

  listaAlunos: AlunoInterface[] = [
    {
      matricula: 111,
      nome: 'Harry Potter',
      email: 'harry@proway.com',
      cadastro: false,
      cursos: ['Javascript', 'HTML', 'CSS'],
      imagem: 'assets/images/user1.png',
      notas: [7,6],
      status: true
    },
    {
      matricula: 222,
      nome: 'Hermione Granger',
      email: 'hermione@proway.com',
      cadastro: true,
      cursos: ['Java', 'Postgres'],
      imagem: 'assets/images/user3.png',
      notas: [10,8,9,10],
      status: true
    },
    {
      matricula: 333,
      nome: 'Rony Weasley',
      email: 'rony@proway.com',
      cadastro: false,
      cursos: ['Python', 'Oracle'],
      imagem: 'assets/images/user2.png',
      notas: [4,2,7],
      status: true
    },
    {
      matricula: 444,
      nome: 'Bob Esponja',
      email: 'bob@proway.com',
      cadastro: true,
      cursos: ['C++', 'PLSQL'],
      imagem: 'assets/images/user4.webp',
      notas: [8,7],
      status: true
    }
  ];

  listaFiltro: AlunoInterface[] = this.listaAlunos;

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
    console.log(`No componente APP - matricula: ${matricula}`);

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
