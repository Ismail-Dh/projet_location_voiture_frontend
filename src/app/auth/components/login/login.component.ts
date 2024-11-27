import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth/auth.service';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,CommonModule], 
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService) {}

  onSubmit() {
    const credentials = { email: this.email, password: this.password };

    this.authService.loginUser(credentials).subscribe({
      next: (response) => {
        console.log('Connexion réussie :', response);
        // Redirigez l'utilisateur ou stockez le token JWT (exemple : dans localStorage)
        alert('Inscription réussie!')
        localStorage.setItem('token', response.token); // Si le backend retourne un token
      },
      error: (error) => {
        console.error('Erreur de connexion :', error);
        this.errorMessage = 'Email ou mot de passe incorrect.';
      },
    });
  }

}
