import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redireciona para Login inicialmente
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent }, // Tela Home após login
];
