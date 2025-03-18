import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { Router } from '@angular/router';
import { LoginAuthService } from '../../services/login-auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule,
    FloatLabelModule,
  ],
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage: string | null = null;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private LoginAuthService: LoginAuthService
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;

      this.LoginAuthService.login(email, password).subscribe({
        next: () => {
          console.log('Login bem-sucedido');
          this.router.navigate(['/']);
        },
        error: (err) => {
          console.error('Erro no login:', err);
          this.errorMessage = 'Usuário ou senha inválidos';
        },
      });
    } else {
      console.log('Formulário inválido');
    }
  }
}
