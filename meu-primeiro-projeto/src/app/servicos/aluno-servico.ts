import { Injectable } from '@angular/core';
import { AlunoInterface } from '../interfaces/AlunoInterface';

@Injectable({
  providedIn: 'root',
})
export class AlunoServico {

  listaAlunos: AlunoInterface[] = [
    {
      matricula: 111,
      nome: 'Harry Potter',
      email: 'harry@proway.com',
      cadastro: false,
      cursos: ['Javascript', 'HTML', 'CSS'],
      imagem: 'assets/images/user1.png',
      notas: [7, 6],
      status: true,
    },
    {
      matricula: 222,
      nome: 'Hermione Granger',
      email: 'hermione@proway.com',
      cadastro: true,
      cursos: ['Java', 'Postgres'],
      imagem: 'assets/images/user3.png',
      notas: [10, 8, 9, 10],
      status: true,
    },
    {
      matricula: 333,
      nome: 'Rony Weasley',
      email: 'rony@proway.com',
      cadastro: false,
      cursos: ['Python', 'Oracle'],
      imagem: 'assets/images/user2.png',
      notas: [4, 2, 7],
      status: true,
    },
    {
      matricula: 444,
      nome: 'Bob Esponja',
      email: 'bob@proway.com',
      cadastro: true,
      cursos: ['C++', 'PLSQL'],
      imagem: 'assets/images/user4.webp',
      notas: [8, 7],
      status: true,
    },
  ];

  constructor() {}

  getListaAlunos(): AlunoInterface[]{
    return this.listaAlunos;
  }

}
