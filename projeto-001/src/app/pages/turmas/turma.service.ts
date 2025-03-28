import { Injectable } from '@angular/core';

export interface ITurma {
  id: number;
  nome: string;
  periodo: 'Matutino' | 'Vespertino' | 'Noturno';
  alunos: number;
  status: 'Ativa' | 'Inativa';
}

@Injectable({
  providedIn: 'root',
})
export class TurmaService {
  private turmas: ITurma[] = [
    {
      id: 1,
      nome: 'Turma A',
      periodo: 'Matutino',
      alunos: 25,
      status: 'Ativa',
    },
    {
      id: 2,
      nome: 'Turma B',
      periodo: 'Vespertino',
      alunos: 30,
      status: 'Ativa',
    },
    {
      id: 3,
      nome: 'Turma C',
      periodo: 'Noturno',
      alunos: 20,
      status: 'Inativa',
    },
    {
      id: 4,
      nome: 'Turma A',
      periodo: 'Noturno',
      alunos: 25,
      status: 'Ativa',
    },
  ];

  constructor() {}

  // Retorna todas as turmas
  getTurmas(): ITurma[] {
    return this.turmas;
  }

  // Obtém uma turma específica pelo ID
  getTurmaById(id: number): ITurma | undefined {
    return this.turmas.find((turma) => turma.id === id);
  }

  // Adiciona uma nova turma
  addTurma(novaTurma: ITurma): void {
    this.turmas.push(novaTurma);
  }

  // Remove uma turma pelo ID
  removeTurma(id: number): void {
    this.turmas = this.turmas.filter((turma) => turma.id !== id);
  }
}
