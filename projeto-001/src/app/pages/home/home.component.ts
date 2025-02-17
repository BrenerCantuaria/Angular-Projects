import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table'; // Importe o TableModule
import { TurmaAlunoService } from './home.service';
@Component({
  selector: 'app-home',
  imports: [CommonModule,TableModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  turmas: any[] = [];
  alunos: any[] = [];

  constructor(private turmaAlunoService: TurmaAlunoService) {
    this.turmas = this.turmaAlunoService.getTurmas();
    this.alunos = this.turmaAlunoService.getAlunos();
  }

  calcularMediaGeral(): number {
    const total = this.alunos.reduce((sum, aluno) => sum + aluno.media, 0);
    return total / this.alunos.length;
  }
  ngOnInit() {
    this.turmas = this.turmaAlunoService.getTurmas();
    this.alunos = this.turmaAlunoService.getAlunos();
  }
}
