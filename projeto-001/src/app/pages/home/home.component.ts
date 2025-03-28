import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { TurmaAlunoService } from './home.service';
import { TurmaService, ITurma } from '../turmas/turma.service';
import { ButtonModule } from 'primeng/button';
import { TurmaCardsComponent } from '../../components/turma-cards/turma-cards.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, TableModule, ButtonModule, TurmaCardsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  turmas: ITurma[] = [];
  turmasFiltradas: ITurma[] = [];
  alunos: any[] = [];

  turnos: { label: string; value: string }[] = [
    { label: 'Todos', value: 'todos' },
    { label: 'Manhã', value: 'Matutino' },
    { label: 'Tarde', value: 'Vespertino' },
    { label: 'Noite', value: 'Noturno' },
  ];
  turnoSelecionado: string = 'todos';

  constructor(
    private turmaAlunoService: TurmaAlunoService,
    private turmaService: TurmaService
  ) {}

  ngOnInit() {
    this.alunos = this.turmaAlunoService.getAlunos();
    this.turmas = this.turmaService.getTurmas();

    // 🔹 Inicia com todas as turmas visíveis
    this.turmasFiltradas = [...this.turmas];
  }

  calcularMediaGeral(): number {
    if (this.alunos.length === 0) return 0; // Evita erro de divisão por zero
    const total = this.alunos.reduce(
      (sum, aluno) => sum + (aluno.media || 0),
      0
    );
    return total / this.alunos.length;
  }

  filtrarPorTurno(turno: string): void {
    this.turnoSelecionado = turno;
    if (turno === 'todos') {
      this.turmasFiltradas = [...this.turmas]; // Exibe todas as turmas
    } else {
      this.turmasFiltradas = this.turmas.filter((t) => t.periodo === turno);
    }
  }
}
