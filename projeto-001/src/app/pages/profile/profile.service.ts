import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private user = { name: 'Professor João', email: 'joao@escola.com', role: 'Professor' };

  getCurrentUser() {
    return this.user;
  }

  logout() {
    console.log('Usuário deslogado');
    // Lógica de logout aqui
  }
}
