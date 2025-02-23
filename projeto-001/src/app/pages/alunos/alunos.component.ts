
import { Component,OnInit, } from '@angular/core';
import { CommonModule } from '@angular/common';
// service
import { TurmaAlunoService } from '../home/home.service';
// Primeng
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ToolbarModule } from 'primeng/toolbar';
import { ProgressBarModule } from 'primeng/progressbar';
import { FormsModule } from '@angular/forms';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { StyleClassModule } from 'primeng/styleclass';

@Component({
  selector: 'app-alunos',
  imports: [TableModule, ButtonModule, InputTextModule, ToolbarModule, ProgressBarModule, FormsModule,InputIconModule,StyleClassModule,IconFieldModule,CommonModule],
  templateUrl: './alunos.component.html',
  styleUrl: './alunos.component.css'
})
export class AlunosComponent implements OnInit {
  alunos: any[] = [];
  totalAlunos: number = 0;
  filtro: string = '';
  rowsPerPage: number = 10;
  pageIndex: number = 0;

  constructor(private turmaAlunoService: TurmaAlunoService) {}

  ngOnInit() {
    this.carregarAlunos();
  }

  carregarAlunos() {
    const allAlunos = this.turmaAlunoService.getAlunos();
    this.totalAlunos = allAlunos.length;
    this.alunos = allAlunos.slice(this.pageIndex * this.rowsPerPage, (this.pageIndex + 1) * this.rowsPerPage);
  }

  onPageChange(event: any) {
    this.pageIndex = event.page;
    this.carregarAlunos();
  }

  onSearch() {
    const allAlunos = this.turmaAlunoService.getAlunos();
    this.alunos = allAlunos.filter(aluno => aluno.nome.toLowerCase().includes(this.filtro.toLowerCase()));
    this.totalAlunos = this.alunos.length;
  }

  resetFilters() {
    this.filtro = '';
    this.carregarAlunos();
  }

  openNew() {
    console.log("Abrir modal para adicionar novo aluno");
  }
}