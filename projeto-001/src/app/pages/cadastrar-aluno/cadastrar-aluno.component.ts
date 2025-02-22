// cadastrar-alunos.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators,FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MessageService } from 'primeng/api';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ToastModule } from 'primeng/toast';
import { CommonModule } from '@angular/common';
import { FakeAlunoService } from '../cadastrar-aluno/cadastrar-aluno.service';
import { DialogModule } from 'primeng/dialog';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';
import { SplitButtonModule } from 'primeng/splitbutton';
import { IconFieldModule } from 'primeng/iconfield';
import { IconField } from 'primeng/iconfield';
import { InputIcon } from 'primeng/inputicon';

@Component({
  selector: 'app-cadastrar-aluno',
  imports: [CommonModule, ReactiveFormsModule, InputTextModule, ButtonModule, CardModule, ToastModule,HttpClientModule,DialogModule,TableModule, FormsModule,ToolbarModule,SplitButtonModule,IconFieldModule,IconField,InputIcon],
  providers: [MessageService],
  templateUrl: './cadastrar-aluno.component.html',
  styleUrl: './cadastrar-aluno.component.css'
})
export class CadastrarAlunoComponent {
  alunoForm: FormGroup;
  turmaId: string | null = null;
  displayModal: boolean = false;
  alunos: any[] = [];
  filtro: string = '';
  isLoading: Boolean = false

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
      this.FakeAlunoService.listarAlunos().subscribe(alunos => {
        this.alunos = alunos;
      });
  }

  // cadastrarAluno() {
  //   if (this.alunoForm.valid) {
  //     const alunoData = { ...this.alunoForm.value, turmaId: this.turmaId };
  //     this.http.post('/api/alunos', alunoData).subscribe(() => {
  //       this.messageService.add({ severity: 'success', summary: 'Sucesso', detail: 'Aluno cadastrado!' });
  //       this.alunoForm.reset();
  //     }, () => {
  //       this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Falha ao cadastrar aluno!' });
  //     });
  //   }
  // }

  calcularIdade(dataNascimento: Date): number {
    const hoje = new Date();
    let idade = hoje.getFullYear() - dataNascimento.getFullYear();
    const mesAtual = hoje.getMonth();
    const mesNascimento = dataNascimento.getMonth();
  
    // Se ainda não fez aniversário no ano atual, reduz a idade
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
        idade: idadeCalculada,
        turmaId: this.turmaId
      };
  
      this.FakeAlunoService.cadastrarAluno(novoAluno);
      
      this.messageService.add({ severity: 'success', summary: 'Sucesso', detail: 'Aluno cadastrado!' });
      this.alunoForm.reset();
      this.displayModal = false;
    }
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
}
