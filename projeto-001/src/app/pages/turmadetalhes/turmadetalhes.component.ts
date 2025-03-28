import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { AccordionModule } from 'primeng/accordion';
import { BadgeModule } from 'primeng/badge';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar'; // se você usar datas input futuramente
import { InputTextModule } from 'primeng/inputtext';
import { RippleModule } from 'primeng/ripple';
import { TabViewModule } from 'primeng/tabview';

import { CriarAtividadeModalComponent } from '../../components/criar-atividade-modal/criar-atividade-modal.component';
import { TurmaAlunoService } from '../home/home.service';

interface IAtividade {
  titulo: string;
  prazo: Date | null;
  publicado: Number | null;
  status: string;
  arquivo: string | null;
  expanded: boolean;
  descricao: string;
}

interface IAlunos {
  nome: string;
  turma: string;
  status: string;
  media: number;
}

@Component({
  selector: 'app-turma-detalhes',
  imports: [
    CommonModule,
    TabViewModule,
    InputTextModule,
    RippleModule,
    FormsModule,
    ButtonModule,
    BadgeModule,
    CalendarModule,
    AccordionModule,
    CriarAtividadeModalComponent,
  ],
  templateUrl: './turmadetalhes.component.html',
  styleUrl: './turmadetalhes.component.css',
})
export class TurmadetalhesComponent {
  listaDeAlunos: IAlunos[] = [];
  constructor(private alunos: TurmaAlunoService) {}

  carregarAluno() {
    this.listaDeAlunos = this.alunos.getAlunos();
  }

  tabSelecionado: 'mural' | 'atividades' | 'materiais' | 'participantes' =
    'mural';
  posts = [
    { titulo: 'Bem-vindos à turma!', data: new Date('2025-03-20') },
    { titulo: 'Primeiro material disponível.', data: new Date('2025-03-22') },
  ];

  atividades: IAtividade[] = [
    {
      titulo: 'Lista 1 - Resistor e Ohm',
      expanded: false,
      publicado: Date.now(),
      prazo: new Date('2025-03-25'),
      status: 'Pendente',
      arquivo: 'aula1.pdf',
      descricao:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem dicta fuga blanditiis cum modi consequuntur aliquam! Quia eligendi explicabo aspernatur consequuntur nihil ad quisquam cumque? Expedita enim quos odit facilis?',
    },
    {
      titulo: 'Mini-projeto: LED com Arduino',
      prazo: new Date('2025-03-28'),
      publicado: Date.now(),
      status: 'Entregue',
      arquivo: null,
      expanded: false,
      descricao:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem dicta fuga blanditiis cum modi consequuntur aliquam! Quia eligendi explicabo aspernatur consequuntur nihil ad quisquam cumque? Expedita enim quos odit facilis?',
    },
  ];

  materiais = [
    {
      titulo: 'Apostila Arduino',
      descricao: 'PDF com introdução',
      link: 'https://exemplo.com/arduino.pdf',
    },
    {
      titulo: 'Slide Aula 1',
      descricao: 'Fundamentos de circuitos',
      link: 'https://exemplo.com/aula1-slides',
    },
  ];

  @ViewChild('modalAtividade') modalAtividade!: CriarAtividadeModalComponent;

  abrirModalAtividade() {
    this.modalAtividade.openModal();
  }

  adicionarAtividade(nova: any) {
    this.atividades.push({
      titulo: nova.titulo,
      prazo: 'Sem prazo definido',
      ...nova,
    });
  }
}
