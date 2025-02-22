import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class FakeAlunoService {
  private alunosSubject = new BehaviorSubject<any[]>([]);
  alunos$ = this.alunosSubject.asObservable();

  cadastrarAluno(aluno: any) {
    const alunosAtuais = this.alunosSubject.getValue();
    this.alunosSubject.next([...alunosAtuais, aluno]); // Atualiza o BehaviorSubject
  }

  listarAlunos() {
    return this.alunos$; // Retorna um Observable
  }
}
