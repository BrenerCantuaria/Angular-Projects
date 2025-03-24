import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TabViewModule } from 'primeng/tabview';
import { InputTextModule } from 'primeng/inputtext';
import { RippleModule } from 'primeng/ripple';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar'; // se você usar datas input futuramente
import { BadgeModule } from 'primeng/badge';
import { ButtonModule } from 'primeng/button';
import { ViewChild } from '@angular/core';
import { CriarAtividadeModalComponent } from '../../components/criar-atividade-modal/criar-atividade-modal.component';
import { CaretRightIcon } from 'primeng/icons';
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
    CriarAtividadeModalComponent,
  ],
  templateUrl: './turmadetalhes.component.html',
  styleUrl: './turmadetalhes.component.css',
})
export class TurmadetalhesComponent {
  tabSelecionado: 'mural' | 'atividades' | 'materiais' = 'mural';
  posts = [
    { titulo: 'Bem-vindos à turma!', data: new Date('2025-03-20') },
    { titulo: 'Primeiro material disponível.', data: new Date('2025-03-22') },
  ];

  atividades = [
    {
      titulo: 'Lista 1 - Resistor e Ohm',
      prazo: new Date('2025-03-25'),
      status: 'Pendente',
    },
    {
      titulo: 'Mini-projeto: LED com Arduino',
      prazo: new Date('2025-03-28'),
      status: 'Entregue',
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
