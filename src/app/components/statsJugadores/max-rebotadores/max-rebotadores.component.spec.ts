import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaxRebotadoresComponent } from './max-rebotadores.component';

describe('MaxRebotadoresComponent', () => {
  let component: MaxRebotadoresComponent;
  let fixture: ComponentFixture<MaxRebotadoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaxRebotadoresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MaxRebotadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
