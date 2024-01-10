import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../authorize.Service';
import { Router, RouterLink } from '@angular/router';
import { InicioSesionComponent } from '../inicio-sesion/inicio-sesion.component';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [CommonModule, FormsModule, InicioSesionComponent, RouterLink],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css',
})
export class RegistroComponent {
  username: any;
  email: any;
  password: any;
  
  aceptoTerminos: boolean = false;

  constructor(public authService: AuthService, private router: Router) {
    
  }

  registrarse() {
    let credentials = { username: this.username, email: this.email , password: this.password };

    this.authService.registrarse(credentials).subscribe(
      (response) => {
        //Swal.fire('Usuario creado', `El usuario ` + this.username + ` se ha creado con éxito`, 'success') 
        this.router.navigate(['/inicioSesion']);
      },
      (error) => {
        console.error('Error registro', error);
      }
    );
  }

  // Función para mostrar/ocultar la contraseña y cambiar el icono del ojo
  togglePasswordVisibility(): void {
    let eyeIcon = document.getElementById('eyeIcon') as HTMLImageElement;
    let password = document.getElementById('password') as HTMLInputElement;

    if (password.type === 'password') {
      eyeIcon.src = '/assets/images/icons/eye-open.svg';
      password.type = 'text';
    } else {
      eyeIcon.src = '/assets/images/icons/eye-closed.svg';
      password.type = 'password';
    }
  }

}
