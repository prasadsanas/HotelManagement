import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form-admin',
  templateUrl: './login-form-admin.component.html',
  styleUrls: ['./login-form-admin.component.css'],
})
export class LoginFormAdminComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  checkLogin() {
    this.router.navigate(['/admin-dashboard']);
  }
  openLogin() {
    this.router.navigate(['/login']);
  }
}
