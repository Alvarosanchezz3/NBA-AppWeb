import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../header/header.component';
import { Types } from './types.model';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-play-offs',
  standalone: true,
  imports: [CommonModule, HeaderComponent, SlickCarouselModule],
  templateUrl: './play-offs.component.html',
  styleUrl: './play-offs.component.css'
})
export class PlayOffsComponent {

  scorerSeasons: Types[] = [
    new Types('Mayores anotadores', '2023'),
    new Types('Mayores anotadores', '2022'),
    new Types('Mayores anotadores', '2021'),
    new Types('Mayores anotadores', '2020'),
    new Types('Mayores anotadores', '2019'),
    new Types('Mayores anotadores', '2018'),
    new Types('Mayores anotadores', '2017'),
    new Types('Mayores anotadores', '2016'),
    new Types('Mayores anotadores', '2015'),
    new Types('Mayores anotadores', '2014'),
    new Types('Mayores anotadores', '2013'),
    new Types('Mayores anotadores', '2012'),
    new Types('Mayores anotadores', '2011')
  ];

  assistsSeasons: Types[] = [
    new Types('Mayores asistidores', '2023'),
    new Types('Mayores asistidores', '2022'),
    new Types('Mayores asistidores', '2021'),
    new Types('Mayores asistidores', '2020'),
    new Types('Mayores asistidores', '2019'),
    new Types('Mayores asistidores', '2018'),
    new Types('Mayores asistidores', '2017'),
    new Types('Mayores asistidores', '2016'),
    new Types('Mayores asistidores', '2015'),
    new Types('Mayores asistidores', '2014'),
    new Types('Mayores asistidores', '2013'),
    new Types('Mayores asistidores', '2012'),
    new Types('Mayores asistidores', '2011')
  ];

  currentSlideIndex = 0;
  currentAssistsSlideIndex = 0;

  // Función genérica para avanzar al siguiente slide
  private nextSlide(index: number, array: Types[]) {
    return (index + 1) % array.length;
  }

  // Función genérica para retroceder al slide anterior
  private prevSlide(index: number, array: Types[]) {
    return index > 0 ? (index - 1) % array.length : index;
  }

  // Función para avanzar al siguiente slide de scorerSeasons
  nextSlideScorer() {
    this.currentSlideIndex = this.nextSlide(this.currentSlideIndex, this.scorerSeasons);
  }

  // Función para retroceder al slide anterior de scorerSeasons
  prevSlideScorer() {
    this.currentSlideIndex = this.prevSlide(this.currentSlideIndex, this.scorerSeasons);
  }

  // Función para avanzar al siguiente slide de assistsSeasons
  nextSlideAssists() {
    this.currentAssistsSlideIndex = this.nextSlide(this.currentAssistsSlideIndex, this.assistsSeasons);
  }

  // Función para retroceder al slide anterior de assistsSeasons
  prevSlideAssists() {
    this.currentAssistsSlideIndex = this.prevSlide(this.currentAssistsSlideIndex, this.assistsSeasons);
  }
}