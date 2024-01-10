import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaxAnotadoresComponent } from './max-anotadores.component';

describe('MaxAnotadoresComponent', () => {
  let component: MaxAnotadoresComponent;
  let fixture: ComponentFixture<MaxAnotadoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaxAnotadoresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MaxAnotadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
