import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { LayoutComponent } from './layout/layout/layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

export const routes: Routes = [
    {
        path: '',
        component: LayoutComponent, // Aplica o layout à home
        children: [
          { path: 'home', component: HomeComponent },// Home é renderizada dentro do layout
          { path: 'dashboard', component: DashboardComponent}
        ]
    },

    {path: 'login',component: LoginComponent},
    {path: 'register',component: RegisterComponent}
];
