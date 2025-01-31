import { Component, OnInit } from '@angular/core';
import { ApiService, Marca } from '../../services/api.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  constructor(private apiService: ApiService, private router: Router ){}

  marcas: Marca[] = []

  logout() {
    this.router.navigate(['/login']); // Redireciona para Login ao sair
  }

  ngOnInit(): void {
    // Faz a chamada ao método do serviço
    this.apiService.getMarcas().subscribe({
      next: (response) => {
        this.marcas  = response
      },
      error: (err) => {
        console.error('Erro ao buscar dados:', err); // Exibe erros (se houver)
      }
    });
  }
}
