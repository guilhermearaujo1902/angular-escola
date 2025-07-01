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

  listaAlunos: AlunoInterface[] = [
    {
      matricula: 111,
      nome: 'Harry Potter',
      email: 'harry@proway.com',
      cadastro: false,
      cursos: ['Javascript', 'HTML', 'CSS'],
      imagem: 'assets/images/user1.png'
    },
    {
      matricula: 222,
      nome: 'Hermione Granger',
      email: 'hermione@proway.com',
      cadastro: true,
      cursos: ['Java', 'Postgres'],
      imagem: 'assets/images/user3.png'
    },
    {
      matricula: 333,
      nome: 'Rony Weasley',
      email: 'rony@proway.com',
      cadastro: false,
      cursos: ['Python', 'Oracle'],
      imagem: 'assets/images/user2.png'
    }
  ];

}
