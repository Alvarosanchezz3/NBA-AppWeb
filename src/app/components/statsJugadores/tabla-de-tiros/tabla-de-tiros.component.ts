import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../header/header.component';
import { ApiService } from '../../../jugadores.Service';
import { Player } from './player.model';

@Component({
  selector: 'app-tabla-de-tiros',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './tabla-de-tiros.component.html',
  styleUrl: './tabla-de-tiros.component.css'
})

export class TablaDeTirosComponent {

  constructor(private apiService: ApiService) {}

  jugador: string = 'sdsd';
  playerData: any;
  
  players: Player[] = [
    new Player('LeBron James', 38, 113, '2\'06', '/assets/images/equiposNBA/LAL.png', '/assets/images/jugadores/lebron.png'),
    new Player('James Harden', 34, 100, '1\'96', '/assets/images/equiposNBA/LAC.png', '/assets/images/jugadores/harden.png'),
    new Player('Stephen Curry', 35, 84, '1\'88', '/assets/images/equiposNBA/GSW.png', '/assets/images/jugadores/curry.png')
  ];
  
  ngOnInit() {
    this.inicializar();
  }

  inicializar () { // Función para cambiar comportamiento de la función seleccionarJugador dentro del OnInit
    this.seleccionarJugador(this.players[0]);
    this.tablaTiro = false;
  }

  tablaTiro = false;

  seleccionarJugador(player: Player) {
    this.jugador = player.name;

    this.tablaTiro = true;
    
    this.apiService.getShortData(this.jugador).subscribe(
      (data) => {
        this.playerData = data;
        console.log(data);
      },
      (error) => {
        console.error('Error en la solicitud:', error);
      }
    );
  }

  // Método para realizar un scroll suave hasta la parte superior de la página
  scrollToTop(): void {
    const options: ScrollToOptions = { top: 0, behavior: 'smooth' };
    window.scroll(options);
  }

  // Propiedades de paginación
  itemsPerPage: number = 20;
  currentPage: number = 1;
  activePage: number = 1;

    // Calcula el índice de inicio y fin para la paginación
    get startIndex(): number {
      return (this.currentPage - 1) * this.itemsPerPage;
    }
  
    get endIndex(): number {
      return this.startIndex + this.itemsPerPage;
    }

  // Calcula el número total de páginas
  get totalPages(): number {
    return Math.ceil(this.playerData.results.length / this.itemsPerPage);
  }

  // Genera una lista de números de página
  get pageNumbers(): number[] {
    return Array(this.totalPages).fill(0).map((_, index) => index + 1);
  }

  // Método para cambiar de página
  goToPage(pageNumber: number): void {
    this.currentPage = pageNumber;
    this.activePage = pageNumber;

    // Llamada del metodo del scroll al cambiar de página
    this.scrollToTop();
  }

  // Método para ir a la página anterior
  prevPage(): void {
    if (this.currentPage > 1) {
      this.goToPage(this.currentPage - 1);
    }
  }

  // Método para ir a la página siguiente
  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.goToPage(this.currentPage + 1);
    }
  }
}