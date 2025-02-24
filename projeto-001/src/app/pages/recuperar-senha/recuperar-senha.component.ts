import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';

@Component({
  selector: 'app-recuperar-senha',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ButtonModule, InputTextModule, FloatLabelModule, RouterModule],
  templateUrl: './recuperar-senha.component.html',
})
export class RecuperarSenhaComponent {
  recuperarSenhaForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.recuperarSenhaForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit() {
    if (this.recuperarSenhaForm.valid) {
      const email = this.recuperarSenhaForm.value.email;
      console.log(`Simulando envio de link para: ${email}`);
      alert('Se o e-mail estiver cadastrado, você receberá um link para redefinir sua senha.');
      this.router.navigate(['/login']);
    }
  }
}
