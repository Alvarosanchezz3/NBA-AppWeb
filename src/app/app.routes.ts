import { Routes } from '@angular/router';
import { JugadoresComponent } from './components/statsJugadores/jugadores/jugadores.component';
import { HomeComponent } from './components/home/home.component';
import { InicioSesionComponent } from './components/inicio-registrarse/inicio-sesion/inicio-sesion.component';
import { StatsJugadorComponent } from './components/statsJugadores/stats-jugador/stats-jugador.component';
import { MaxAnotadoresComponent } from './components/statsJugadores/max-anotadores/max-anotadores.component';
import { MaxAsistenciasComponent } from './components/statsJugadores/max-asistencias/max-asistencias.component';
import { MaxRebotadoresComponent } from './components/statsJugadores/max-rebotadores/max-rebotadores.component';
import { TablaDeTirosComponent } from './components/statsJugadores/tabla-de-tiros/tabla-de-tiros.component';
import { PlayOffsComponent } from './components/statsJugadores/play-offs/play-offs.component';
import { RegistroComponent } from './components/inicio-registrarse/registro/registro.component';

export const routes: Routes = [   
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'home/:username', component: HomeComponent},
    {path: 'inicioSesion', component: InicioSesionComponent},
    {path: 'registrarse', component: RegistroComponent},
    {path: 'registro', component: RegistroComponent},
    {path: 'statsJugador/:nombre', component: StatsJugadorComponent},
    {path: 'jugadores', component: JugadoresComponent},
    {path: 'anotadores', component: MaxAnotadoresComponent},
    {path: 'asistentes', component: MaxAsistenciasComponent},
    {path: 'rebotadores', component: MaxRebotadoresComponent},
    {path: 'tablaDeTiros', component: TablaDeTirosComponent},
    {path: 'playOffs', component: PlayOffsComponent}
];
