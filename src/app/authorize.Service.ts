
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class AuthService {
  private apiUrlLogin = 'http://localhost:8080/api/users/login';
  private apiUrlRegistrarse = 'http://localhost:8080/api/users/registrarse';
  private isLoggedInKey = 'is-logged-in';
  private userKey = 'user-data';

  constructor(private http: HttpClient) {}

  // Método que llama a la Api Rest de Spring para comprobar los datos en la BDD
  login(credentials: any): Observable<any> {
    return this.http.post(this.apiUrlLogin, credentials);
  }

  registrarse(data: any) {
    return this.http.post(this.apiUrlRegistrarse, data)
  }

  // Método para obtener el estado de inicio de sesión desde localStorage
  isLoggedIn(): boolean {
    return localStorage.getItem(this.isLoggedInKey) === 'true';
  }

  // Método para establecer el estado de inicio de sesión en localStorage
  setLoggedIn(value: boolean): void {
    localStorage.setItem(this.isLoggedInKey, value ? 'true' : 'false');
  }

  // Método para obtener la información del usuario desde localStorage
  getUser(): string {
    return localStorage.getItem(this.userKey) || '';
  }

  // Método para establecer la información del usuario en localStorage
  setUser(user: string): void {
    localStorage.setItem(this.userKey, user);
  }

  // Método para cerrar sesión
  logOut(): void {
    localStorage.removeItem(this.isLoggedInKey);
    localStorage.removeItem(this.userKey);
  }
}