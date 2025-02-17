import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface Turma {
  id?: number;
  nome: string;
  descricao: string;
}

@Component({
  selector: 'app-turmas',
  template: ``,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, TableModule, ButtonModule, InputTextModule, DialogModule],
  templateUrl: './turmas.component.html',
  styleUrl: './turmas.component.css',
  schemas: [NO_ERRORS_SCHEMA]
})
export class TurmasComponent {
  turmas: Turma[] = [
    { id: 1, nome: 'Turma A', descricao: 'Matemática Avançada' },
    { id: 2, nome: 'Turma B', descricao: 'Física para Iniciantes' }
  ];
  displayDialog: boolean = false;
  turmaForm: FormGroup;
  editing: boolean = false;
  selectedTurma: Turma | null = null;

  constructor(private fb: FormBuilder) {
    this.turmaForm = this.fb.group({
      nome: ['', Validators.required],
      descricao: ['', Validators.required]
    });
  }

  openNew() {
    this.editing = false;
    this.selectedTurma = null;
    this.turmaForm.reset();
    this.displayDialog = true;
  }

  editTurma(turma: Turma) {
    this.editing = true;
    this.selectedTurma = { ...turma };
    this.turmaForm.setValue({
      nome: turma.nome,
      descricao: turma.descricao
    });
    this.displayDialog = true;
  }

  onSubmit() {
    if (this.turmaForm.valid) {
      this.saveTurma();
    }
  }

  saveTurma() {
    const turmaData = this.turmaForm.value;
    if (this.editing && this.selectedTurma) {
      const index = this.turmas.findIndex(t => t.id === this.selectedTurma!.id);
      this.turmas[index] = { ...this.selectedTurma, ...turmaData };
    } else {
      const newId = this.turmas.length ? Math.max(...this.turmas.map(t => t.id || 0)) + 1 : 1;
      this.turmas.push({ id: newId, ...turmaData });
    }
    this.displayDialog = false;
  }

  deleteTurma(turma: Turma) {
    if (confirm('Tem certeza que deseja excluir esta turma?')) {
      this.turmas = this.turmas.filter(t => t.id !== turma.id);
    }
  }
}
