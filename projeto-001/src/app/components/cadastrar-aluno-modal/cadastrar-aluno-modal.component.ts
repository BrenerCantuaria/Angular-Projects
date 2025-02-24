import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cadastrar-aluno-modal',
  standalone: true,
  imports: [CommonModule, DialogModule, ButtonModule, InputTextModule, ReactiveFormsModule],
  templateUrl: './cadastrar-aluno-modal.component.html',
})
export class CadastrarAlunoModalComponent {
  @Output() alunoCadastrado = new EventEmitter<any>(); // Emite evento ao cadastrar aluno
  displayModal = false;
  alunoForm: FormGroup;
  editando: boolean = false;

  constructor(private fb: FormBuilder) {
    this.alunoForm = this.fb.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      dataNascimento: ['', Validators.required]
    });
  }

  openModal() {
    this.displayModal = true;
  }

  closeModal() {
    this.displayModal = false;
  }

  cadastrarAluno() {
    if (this.alunoForm.valid) {
      const alunoData = { ...this.alunoForm.value };
      this.alunoCadastrado.emit(alunoData); // Envia os dados do aluno para o componente pai
      this.alunoForm.reset();
      this.closeModal();
    }
  }
  editarAluno(aluno: any) {
    this.alunoForm.patchValue(aluno);
    this.displayModal = true;
    this.editando = true;
    this.alunoForm.reset();
    this.closeModal();
  }
}
