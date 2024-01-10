import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { RouterLink, ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../authorize.Service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeaderComponent, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  providers: [AuthService]
})

export class HomeComponent implements OnInit{
  username: string = '';

  isLoggedIn: boolean = false;

  constructor(private authService: AuthService, private actRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.isLoggedIn = this.authService.isLoggedIn();
    this.username = this.authService.getUser()
  }

  cerrarSesion() {
    this.authService.logOut();
    this.router.navigate(['/home']);
  }
}