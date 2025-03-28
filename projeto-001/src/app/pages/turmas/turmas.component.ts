import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RadioButtonModule } from 'primeng/radiobutton';
import { MenuModule } from 'primeng/menu';
interface Turma {
  id?: number;
  nome: string;
  descricao: string;
  background?: string;
  backgroundType: string;
}

@Component({
  selector: 'app-turmas',
  template: ``,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    DialogModule,
    RadioButtonModule,
    MenuModule,
  ],
  templateUrl: './turmas.component.html',
  styleUrl: './turmas.component.css',
  schemas: [NO_ERRORS_SCHEMA],
})
export class TurmasComponent {
  turmas: Turma[] = [
    {
      id: 1,
      nome: 'Turma A',
      descricao: 'Matemática Avançada',
      background: '#ffffff',
      backgroundType: 'color',
    },
    {
      id: 2,
      nome: 'Turma B',
      descricao: 'Física para Iniciantes',
      background: '#ffffff',
      backgroundType: 'color',
    },
  ];
  displayDialog: boolean = false;
  turmaForm: FormGroup;
  editing: boolean = false;
  selectedTurma: Turma | null = null;
  backgroundType: string = 'color'; // Define se é cor ou imagem
  imagensDisponiveis: string[] = ['/img2.jpg', '/img3.jpg', '/img4.jpg'];
  constructor(private fb: FormBuilder, private router: Router) {
    this.turmaForm = this.fb.group({
      nome: ['', Validators.required],
      descricao: ['', Validators.required],
      backgroundType: ['color'],
      background: ['#ffffff'],
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

    const isImage = turma.background && turma.background.startsWith('/');
    this.turmaForm.setValue({
      nome: turma.nome,
      descricao: turma.descricao,
      backgroundType: isImage ? 'image' : 'color',
      background: turma.background || '#ffffff',
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
      const index = this.turmas.findIndex(
        (t) => t.id === this.selectedTurma!.id
      );
      this.turmas[index] = { ...this.selectedTurma, ...turmaData };
    } else {
      const newId = this.turmas.length
        ? Math.max(...this.turmas.map((t) => t.id || 0)) + 1
        : 1;
      this.turmas.push({ id: newId, ...turmaData });
    }
    this.displayDialog = false;
  }

  deleteTurma(turma: Turma) {
    if (confirm('Tem certeza que deseja excluir esta turma?')) {
      this.turmas = this.turmas.filter((t) => t.id !== turma.id);
    }
  }

  navegarParaCadastro(turma: Turma) {
    console.log(turma.id);
    console.log(`clicado`);
    this.router.navigate([`/turmas/${turma.id}/turmadetalhes`]);
  }
  selecionarImagem(img: string) {
    this.turmaForm.patchValue({ background: img });
  }
}
