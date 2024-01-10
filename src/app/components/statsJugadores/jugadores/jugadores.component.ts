import { Component, Renderer2, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../../jugadores.Service';
import { HeaderComponent } from '../../header/header.component';


@Component({
  selector: 'app-jugadores',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './jugadores.component.html',
  styleUrl: './jugadores.component.css'
})
export class JugadoresComponent {
  playersData: any;

  constructor(private apiService: ApiService, private renderer: Renderer2, private el: ElementRef) {}

  ngOnInit(): void {
    this.apiService.getAllPlayersData().subscribe(
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