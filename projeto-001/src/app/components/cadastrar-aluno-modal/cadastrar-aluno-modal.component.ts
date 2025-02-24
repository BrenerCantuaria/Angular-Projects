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
  calcularIdade(dataNascimento: Date): number {
    const hoje = new Date();
    let idade = hoje.getFullYear() - dataNascimento.getFullYear();
    const mesAtual = hoje.getMonth();
    const mesNascimento = dataNascimento.getMonth();

    // Ajuste caso o aluno ainda não tenha feito aniversário neste ano
    if (mesNascimento > mesAtual || (mesNascimento === mesAtual && hoje.getDate() < dataNascimento.getDate())) {
      idade--;
    }

    return idade;
  }

  cadastrarAluno() {
    if (this.alunoForm.valid && this.editando == false) {
      const alunoData = { ...this.alunoForm.value };
      alunoData.idade = this.calcularIdade(new Date(alunoData.dataNascimento)); // Adiciona a idade ao objeto
  
      this.alunoCadastrado.emit(alunoData); 
      this.alunoForm.reset();
      this.closeModal();
    }
  }
  
  editarAluno(aluno: any) {
    this.alunoForm.patchValue(aluno);
    this.displayModal = true;
    this.editando = true;
  }
}
