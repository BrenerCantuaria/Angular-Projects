import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { filter } from 'rxjs';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,SidebarComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'projeto-01';

  showSidebar = true; // Controla exibição do sidebar

  constructor(private router: Router) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd) // Apenas eventos de navegação finalizada
    ).subscribe(() => {
      this.showSidebar = this.router.url !== '/login'; // Esconder sidebar apenas no login
    });
  }
}
