import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Menubar } from 'primeng/menubar';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { Ripple } from 'primeng/ripple';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  standalone: true,
  imports: [
    Menubar,
    BadgeModule,
    AvatarModule,
    InputTextModule,
    Ripple,
    CommonModule,
  ],
})
export class SidebarComponent {
  items: MenuItem[] = [];

  constructor(private router: Router) {
    this.items = [
      { label: 'Home', icon: 'pi pi-home', routerLink: '/' },
      { label: 'Turmas', icon: 'pi pi-users', routerLink: '/turmas' },
      { label: 'Alunos', icon: 'pi pi-id-card', routerLink: '/alunos' },
    ];
  }

  getRouterUsuario() {
    this.router.navigate(['/perfil']);
  }
}
