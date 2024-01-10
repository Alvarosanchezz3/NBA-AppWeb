import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../../jugadores.Service';
import { ActivatedRoute } from '@angular/router';
import { HeaderComponent } from '../../header/header.component';

@Component({
  selector: 'app-stats-jugador',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './stats-jugador.component.html',
  styleUrl: './stats-jugador.component.css'
})
export class StatsJugadorComponent {
  
  constructor(private apiService: ApiService, private activatedRoute: ActivatedRoute) {}

  jugador: string = '';

  playerData: any;

  ngOnInit() {
    // Obtener el nombre del jugador desde la ruta
    this.activatedRoute.paramMap.subscribe((params) => {
      this.jugador = params.get('nombre') || '';
    });

    // Llamada a la api de baloncesto con el nombre que recibimos en la ruta
    this.apiService.getPlayerData(this.jugador).subscribe(
      (data) => {
        this.playerData = data;
        console.log(data)
      },
      (error) => {
        console.error('Error en la solicitud:', error);
      }
    );
  }
}
