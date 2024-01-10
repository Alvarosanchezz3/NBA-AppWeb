import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'https://nba-stats-db.herokuapp.com/api/playerdata/season/2023';

  private urlBusquedaJugador = 'https://nba-stats-db.herokuapp.com/api/playerdata/name/';

  private urlScorers = 'https://nba-stats-db.herokuapp.com/api/playerdata/topscorers/total/season/2023/'

  private urlAssists= 'https://nba-stats-db.herokuapp.com/api/top_assists/totals/2023/'

  private urlRebounders = 'https://nba-stats-db.herokuapp.com/api/top_rebounds/totals/2023/'

  private urlShortData = 'https://nba-stats-db.herokuapp.com/api/shot_chart_data/'

  constructor(private http: HttpClient) {}

  getAllPlayersData(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  getPlayerData(jugador: string): Observable<any> {
    return this.http.get<any>(this.urlBusquedaJugador + jugador);
  }

  getmaxScorers(): Observable<any> {
    return this.http.get<any>(this.urlScorers);
  }

  getmaxAssistants(): Observable<any> {
    return this.http.get<any>(this.urlAssists);
  }

  getmaxRebounders(): Observable<any> {
    return this.http.get<any>(this.urlRebounders);
  }

  getShortData(player: string): Observable<any> {
    return this.http.get<any>(this.urlShortData + player + '/2023/');
  }
}