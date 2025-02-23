import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenuModule } from 'primeng/menu';
import { CommonModule } from '@angular/common';
import { Menubar } from 'primeng/menubar';
// PrimeNG
import { PanelMenuModule } from 'primeng/panelmenu';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  imports: [CommonModule, MenuModule,PanelMenuModule],
})
export class SidebarComponent {
  items: MenuItem[] = [];

  constructor() {
    this.items = [
      { label: 'Home', icon: 'pi pi-home', routerLink: '/' },
      { label: 'Dashboard', icon: 'pi pi-chart-line', routerLink: '/dashboard' },
      { label: 'Turmas', icon: 'pi pi-users', routerLink: '/turmas' },
      { label: 'Perfil', icon: 'pi pi-user', routerLink: '/perfil' },

    ];
  }
}
