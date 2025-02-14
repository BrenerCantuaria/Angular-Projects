import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TurmaAlunoService {
  getTurmas() {
    return [
      { nome: 'Turma A', periodo: 'Manhã', alunos: 25, status: 'Ativa' },
      { nome: 'Turma B', periodo: 'Tarde', alunos: 30, status: 'Inativa' },
    ];
  }

  getAlunos() {
    return [
      { nome: 'João Silva', turma: 'Turma A', status: 'Ativo', media: 8.5 },
      { nome: 'Maria Oliveira', turma: 'Turma B', status: 'Inativo', media: 7.0 },
      { nome: 'Carlos Santos', turma: 'Turma A', status: 'Ativo', media: 9.0 },
      { nome: 'Ana Souza', turma: 'Turma B', status: 'Ativo', media: 6.8 },
      { nome: 'Fernanda Lima', turma: 'Turma A', status: 'Ativo', media: 8.2 },
      { nome: 'Roberto Nunes', turma: 'Turma B', status: 'Inativo', media: 5.4 },
      { nome: 'Juliana Costa', turma: 'Turma A', status: 'Ativo', media: 7.9 },
      { nome: 'Ricardo Mendes', turma: 'Turma B', status: 'Ativo', media: 8.7 },
      { nome: 'Beatriz Moreira', turma: 'Turma A', status: 'Ativo', media: 9.1 },
      { nome: 'Gustavo Ribeiro', turma: 'Turma B', status: 'Inativo', media: 6.5 },
      { nome: 'Carolina Farias', turma: 'Turma A', status: 'Ativo', media: 8.3 },
      { nome: 'Vinícius Rocha', turma: 'Turma B', status: 'Ativo', media: 7.4 },
      { nome: 'Aline Pacheco', turma: 'Turma A', status: 'Ativo', media: 8.9 },
      { nome: 'Daniel Martins', turma: 'Turma B', status: 'Ativo', media: 6.7 },
      { nome: 'Amanda Ferreira', turma: 'Turma A', status: 'Ativo', media: 9.2 },
      { nome: 'Lucas Almeida', turma: 'Turma B', status: 'Inativo', media: 5.8 },
      { nome: 'Mariana Cardoso', turma: 'Turma A', status: 'Ativo', media: 8.1 },
      { nome: 'Felipe Duarte', turma: 'Turma B', status: 'Ativo', media: 7.6 },
      { nome: 'Larissa Barros', turma: 'Turma A', status: 'Ativo', media: 8.4 },
      { nome: 'Gabriel Souza', turma: 'Turma B', status: 'Inativo', media: 6.3 },
      { nome: 'Eduardo Lima', turma: 'Turma A', status: 'Ativo', media: 7.8 },
      { nome: 'Camila Pereira', turma: 'Turma B', status: 'Ativo', media: 8.0 },
      { nome: 'André Oliveira', turma: 'Turma A', status: 'Ativo', media: 9.4 },
      { nome: 'Tatiane Melo', turma: 'Turma B', status: 'Inativo', media: 6.1 },
      { nome: 'Pedro Azevedo', turma: 'Turma A', status: 'Ativo', media: 7.7 },
      { nome: 'Isabela Fernandes', turma: 'Turma B', status: 'Ativo', media: 8.6 }
    ];
  }
}
