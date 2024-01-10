import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaxAsistenciasComponent } from './max-asistencias.component';

describe('MaxAsistenciasComponent', () => {
  let component: MaxAsistenciasComponent;
  let fixture: ComponentFixture<MaxAsistenciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaxAsistenciasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MaxAsistenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
