import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../header/header.component';
import { ApiService } from '../../../jugadores.Service';

@Component({
  selector: 'app-max-anotadores',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './max-anotadores.component.html',
  styleUrl: './max-anotadores.component.css'
})
export class MaxAnotadoresComponent {

  constructor(private apiService: ApiService) {}

  playersData: any;

  ngOnInit(): void {
    this.apiService.getmaxScorers().subscribe(
      (data) => {
        this.playersData = data;
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
    return Math.ceil(this.playersData.results.length / this.itemsPerPage);
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
