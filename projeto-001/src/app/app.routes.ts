import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { LayoutComponent } from './layout/layout/layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TurmasComponent } from './pages/turmas/turmas.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { CadastrarAlunoComponent } from './pages/cadastrar-aluno/cadastrar-aluno.component';
import { AlunosComponent } from './pages/alunos/alunos.component';
import { RecuperarSenhaComponent } from './pages/recuperar-senha/recuperar-senha.component';
import { LoginAuthGuard } from './services/login-auth.guard';
import { TurmadetalhesComponent } from './pages/turmadetalhes/turmadetalhes.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent, // Aplica o layout à home
    // canActivate: [LoginAuthGuard],
    children: [
      { path: '', component: HomeComponent },
      { path: 'turmas', component: TurmasComponent },
      { path: 'alunos', component: AlunosComponent },
      { path: 'perfil', component: ProfileComponent },
      {
        path: 'turmas/:id/turmadetalhes',
        component: TurmadetalhesComponent,
      },
    ],
  },

  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'recuperar-senha', component: RecuperarSenhaComponent },
];
