import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';
import { ITurma } from '../../pages/turmas/turma.service';
import { TurmaService } from '../../pages/turmas/turma.service';
@Component({
  selector: 'app-turma-cards',
  imports: [CommonModule, CardModule, ButtonModule, RouterModule],
  templateUrl: './turma-cards.component.html',
  styleUrl: './turma-cards.component.css',
})
export class TurmaCardsComponent implements OnInit {
  @Input() turmas: ITurma[] = [];

  constructor(private turmaService: TurmaService) {}
  ngOnInit() {
    this.turmas = this.turmaService.getTurmas();
  }
}
