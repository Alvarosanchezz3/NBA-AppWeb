import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { InicioSesionComponent } from './components/inicio-registrarse/inicio-sesion/inicio-sesion.component';
import { JugadoresComponent } from './components/statsJugadores/jugadores/jugadores.component';
import { StatsJugadorComponent } from './components/statsJugadores/stats-jugador/stats-jugador.component';
import { ApiService } from './jugadores.Service';
import { HomeComponent } from './components/home/home.component';
import { RegistroComponent } from './components/inicio-registrarse/registro/registro.component';
import { AuthService } from './authorize.Service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterOutlet, HeaderComponent,
            InicioSesionComponent, JugadoresComponent, RegistroComponent,
            StatsJugadorComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ApiService, AuthService]
})

export class AppComponent {
}
