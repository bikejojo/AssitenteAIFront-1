import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.scss']
})
export class LoginDialogComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  login() {
    // Simula la autenticación
    if (this.username === 'user' && this.password === 'password') {
      this.router.navigate(['/home']);
    } else {
      alert('Invalid credentials');
    }
  }
}
