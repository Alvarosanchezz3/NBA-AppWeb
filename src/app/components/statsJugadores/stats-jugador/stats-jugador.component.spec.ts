import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsJugadorComponent } from './stats-jugador.component';

describe('StatsJugadorComponent', () => {
  let component: StatsJugadorComponent;
  let fixture: ComponentFixture<StatsJugadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatsJugadorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StatsJugadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
