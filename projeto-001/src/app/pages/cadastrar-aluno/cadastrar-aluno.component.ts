import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { MessageService } from 'primeng/api';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 

import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast'; // Adicionando módulo para p-toast
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar'; // Adicionando módulo para p-toolbar
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

  @ViewChild('modalCadastro') modalCadastro!: CadastrarAlunoModalComponent;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private messageService: MessageService,
    private FakeAlunoService: FakeAlunoService
  ) {}

  ngOnInit() {
    this.carregarAlunos();
  }

  carregarAlunos() {
    this.FakeAlunoService.listarAlunos().subscribe(alunos => {
      this.alunos = alunos;
    });
  }

  onSearch() {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 500);
  }

  adicionarAluno(novoAluno: any) {
    this.alunos.push(novoAluno);
    this.messageService.add({ severity: 'success', summary: 'Sucesso', detail: 'Aluno cadastrado!' });
  }

  openModalCadastro() {
    this.modalCadastro.openModal();
  }
}
