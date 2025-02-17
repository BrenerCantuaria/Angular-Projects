import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ProfileService } from './profile.service'; // Exemplo de serviço de autenticação

@Component({
  selector: 'app-profile',
  imports: [CommonModule, CardModule, ButtonModule,CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  user: any;

  constructor(private authService: ProfileService) {
    this.user = this.authService.getCurrentUser();
  }

  logout() {
    this.authService.logout();
  }
}
