import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MessageService } from 'primeng/api';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';

import { CadastrarAlunoModalComponent } from '../../components/cadastrar-aluno-modal/cadastrar-aluno-modal.component';
import { FakeAlunoService } from '../cadastrar-aluno/cadastrar-aluno.service';

@Component({
  selector: 'app-cadastrar-aluno',
  standalone: true,
  templateUrl: './cadastrar-aluno.component.html',
  styleUrl: './cadastrar-aluno.component.css',
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule,
    ToastModule,
    TableModule,
    ToolbarModule,
    CadastrarAlunoModalComponent,
    IconFieldModule,
    InputIconModule
  ],
  providers: [MessageService]
})
export class CadastrarAlunoComponent implements OnInit {
  alunos: any[] = [];
  filtro: string = '';
  isLoading: boolean = false;
  alunoForm: FormGroup;
  turmaId: string | null = null;

  @ViewChild('modalCadastro') modalCadastro!: CadastrarAlunoModalComponent;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private http: HttpClient,
    private messageService: MessageService,
    private FakeAlunoService: FakeAlunoService
  ) {
    this.alunoForm = this.fb.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      dataNascimento: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.turmaId = this.route.snapshot.paramMap.get('id');
    this.carregarAlunos();
  }

  carregarAlunos() {
    this.FakeAlunoService.listarAlunos().subscribe(alunos => {
      this.alunos = alunos;
    });
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
    if (this.alunoForm.valid) {
      const dadosFormulario = this.alunoForm.value;
      const dataNascimento = new Date(dadosFormulario.dataNascimento);
      const idadeCalculada = this.calcularIdade(dataNascimento);

      const novoAluno = {
        nome: dadosFormulario.nome,
        email: dadosFormulario.email,
        idade: idadeCalculada, // Agora a idade está sendo corretamente atribuída
        turmaId: this.turmaId
      };

      this.adicionarAluno(novoAluno)

      this.alunoForm.reset();
      this.modalCadastro.closeModal();
    }
  }
  adicionarAluno(novoAluno: any) {
    this.alunos.push(novoAluno);
    this.messageService.add({ severity: 'success', summary: 'Sucesso', detail: 'Aluno cadastrado!' });
  }

  onSearch() {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 500);
  }

  get alunosFiltrados(): any[] {
    return this.alunos.filter(aluno => aluno.nome.toLowerCase().includes(this.filtro.toLowerCase()));
  }

  openModalCadastro() {
    this.modalCadastro.openModal();
  }

  editarAluno(aluno: any) {
    this.modalCadastro.editarAluno(aluno); // Passa o aluno para edição no modal
  }

  removerAluno(aluno: any) {
    this.alunos = this.alunos.filter(a => a.email !== aluno.email);
    this.messageService.add({ severity: 'warn', summary: 'Removido', detail: 'Aluno excluído!' });
  }

}
