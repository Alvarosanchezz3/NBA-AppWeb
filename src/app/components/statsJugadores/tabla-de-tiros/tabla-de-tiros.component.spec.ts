import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaDeTirosComponent } from './tabla-de-tiros.component';

describe('TablaDeTirosComponent', () => {
  let component: TablaDeTirosComponent;
  let fixture: ComponentFixture<TablaDeTirosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablaDeTirosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TablaDeTirosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
