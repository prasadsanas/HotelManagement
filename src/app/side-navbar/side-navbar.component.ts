import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-navbar',
  templateUrl: './side-navbar.component.html',
  styleUrls: ['./side-navbar.component.css'],
})
export class SideNavbarComponent implements OnInit {
  isAdminLoggedin: boolean = true;
  constructor(private router: Router) {}

  ngOnInit(): void {}

  logout() {
    this.isAdminLoggedin = false;
    this.router.navigate(['/login-admin']);
  }
}
