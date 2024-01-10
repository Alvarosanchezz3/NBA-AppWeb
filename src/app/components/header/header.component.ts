import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../authorize.Service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  providers: [AuthService]
})
export class HeaderComponent implements OnInit{

  nombreJugador: string = '';

  username: string = '';

  isLoggedIn: boolean = false;

  constructor(public authService:AuthService, private router: Router) {}  

  ngOnInit(): void {
    this.isLoggedIn = this.authService.isLoggedIn();
    this.username = this.authService.getUser()
  }

  navigateTo(route: string): void {
    if (this.isLoggedIn) {
      this.router.navigate([route]); 
    }
    };

  navigateToHome(): void {
    if (this.isLoggedIn) {
        this.router.navigate(['/home', this.username ]);
      } else {
        this.router.navigate(['/home']);
      }
    };
  
  buscarJugador() {
    if (this.isLoggedIn) {
      if (this.nombreJugador.trim() === '') {
        // No hacer nada si el campo está vacío
        return;
      }
      
      // Navega al componente de estadísticas de jugador y pasa el nombre como parámetro
      this.router.navigate(['/statsJugador', this.nombreJugador]);
    }
  }

  // Imagenes de los equipos para hacer un bucle
  teamList = [
    { imageSrc: '/assets/images/equiposNBA/POR.png', altText: 'Blazzers' },
    { imageSrc: '/assets/images/equiposNBA/MIL.png', altText: 'Bucks' },
    { imageSrc: '/assets/images/equiposNBA/CLE.png', altText: 'Cavaliers' },
    { imageSrc: '/assets/images/equiposNBA/BOS.png', altText: 'Celtics' },
    { imageSrc: '/assets/images/equiposNBA/CHI.png', altText: 'Chicago Bulls' },
    { imageSrc: '/assets/images/equiposNBA/LAC.png', altText: 'Clippers' },
    { imageSrc: '/assets/images/equiposNBA/MEM.png', altText: 'Grizzlies' },
    { imageSrc: '/assets/images/equiposNBA/ATL.png', altText: 'Hawks' },
    { imageSrc: '/assets/images/equiposNBA/CHO.png', altText: 'Hornets' },
    { imageSrc: '/assets/images/equiposNBA/IND.png', altText: 'Indiana Pacers' },
    { imageSrc: '/assets/images/equiposNBA/UTA.png', altText: 'Jazz' },
    { imageSrc: '/assets/images/equiposNBA/SAC.png', altText: 'Kings' },
    { imageSrc: '/assets/images/equiposNBA/LAL.png', altText: 'Lakers' },
    { imageSrc: '/assets/images/equiposNBA/DAL.png', altText: 'Mavericks' },
    { imageSrc: '/assets/images/equiposNBA/MIA.png', altText: 'Miami Heat' },
    { imageSrc: '/assets/images/equiposNBA/BRK.png', altText: 'Nets' },
    { imageSrc: '/assets/images/equiposNBA/NYK.png', altText: 'New York Knicks' },
    { imageSrc: '/assets/images/equiposNBA/DEN.png', altText: 'Nuggets' },
    { imageSrc: '/assets/images/equiposNBA/ORL.png', altText: 'Orlando Magic' },
    { imageSrc: '/assets/images/equiposNBA/NOP.png', altText: 'Pelicans' },
    { imageSrc: '/assets/images/equiposNBA/PHI.png', altText: 'Philadelphia 76ers' },
    { imageSrc: '/assets/images/equiposNBA/DET.png', altText: 'Pistons' },
    { imageSrc: '/assets/images/equiposNBA/TOR.png', altText: 'Raptors' },
    { imageSrc: '/assets/images/equiposNBA/HOU.png', altText: 'Rockets' },
    { imageSrc: '/assets/images/equiposNBA/SAS.png', altText: 'Spurs' },
    { imageSrc: '/assets/images/equiposNBA/PHO.png', altText: 'Suns' },
    { imageSrc: '/assets/images/equiposNBA/OKC.png', altText: 'Thunder' },
    { imageSrc: '/assets/images/equiposNBA/MIN.png', altText: 'Timberwolfs' },
    { imageSrc: '/assets/images/equiposNBA/GSW.png', altText: 'Warriors' },
    { imageSrc: '/assets/images/equiposNBA/WAS.png', altText: 'Wizards' },
  ];

  // Funciones para aplicar css al hacer click
  menuOpen = false;

  toggleMenu() { 
    if (this.isLoggedIn) {
      this.menuOpen = !this.menuOpen;
    }
  };

  isActive = false;

  toggleSearch() {
    if (this.isLoggedIn) {
      this.isActive = !this.isActive;

      if (this.nombreJugador.trim() === '') {
        // No hacer nada si el campo está vacío
        return;
        }
        
        if (this.isActive == false) {
          this.router.navigate(['/statsJugador', this.nombreJugador]);
        }
      };
    }
}
