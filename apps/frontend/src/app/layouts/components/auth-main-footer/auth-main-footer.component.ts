import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-main-footer',
  templateUrl: './auth-main-footer.component.html',
  styleUrls: ['./auth-main-footer.component.css'],
})
export class AuthMainFooterComponent {
  constructor(private router: Router) {}

  goToRegister() {
    this.router.navigate(['/auth/register']);
  }
}
