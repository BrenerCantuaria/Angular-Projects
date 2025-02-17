import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { LayoutComponent } from './layout/layout/layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TurmasComponent } from './pages/turmas/turmas.component';
import { ProfileComponent } from './pages/profile/profile.component';

export const routes: Routes = [
    {
        path: '',
        component: LayoutComponent, // Aplica o layout à home
        children: [
          { path: 'home', component: HomeComponent },
          { path: 'dashboard', component: DashboardComponent},
          { path: 'turmas', component: TurmasComponent},
          { path: 'perfil', component: ProfileComponent}
        ]
    },

    {path: 'login',component: LoginComponent},
    {path: 'register',component: RegisterComponent}
];
