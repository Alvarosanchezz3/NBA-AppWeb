import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router  } from '@angular/router';
import { AuthService } from '../../../authorize.Service';
import { FormsModule } from '@angular/forms';
import { RegistroComponent } from '../registro/registro.component';

@Component({
  selector: 'app-inicio-sesion',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule, RegistroComponent],
  templateUrl: './inicio-sesion.component.html',
  styleUrl: './inicio-sesion.component.css',
  providers: [AuthService]
})
export class InicioSesionComponent{

  username: any;
  password: any;
  showError: boolean = false;

  constructor(public authService: AuthService, private router: Router) {}

  login() {
    let credentials = { username: this.username, password: this.password };

    this.authService.login(credentials).subscribe(
      (response) => {
        this.showError = false;
        this.authService.setUser(this.username);
        this.authService.setLoggedIn(true);
        this.router.navigate(['/home', this.username]);
      },
      (error) => {
        this.showError = true;
      }
    );
  }

  // Función para mostrar/ocultar la contraseña y cambiar el icono del ojo
  
  togglePasswordVisibility(): void {
    let eyeIcon = document.getElementById("eyeIcon") as HTMLImageElement;
    let password = document.getElementById("password") as HTMLInputElement;

    if (password.type === "password") {
        eyeIcon.src = "/assets/images/icons/eye-open.svg";
        password.type = "text";
    } else {
        eyeIcon.src = "/assets/images/icons/eye-closed.svg";
        password.type = "password";
    }
  }
}
