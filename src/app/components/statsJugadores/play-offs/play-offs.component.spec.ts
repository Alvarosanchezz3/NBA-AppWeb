import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayOffsComponent } from './play-offs.component';

describe('PlayOffsComponent', () => {
  let component: PlayOffsComponent;
  let fixture: ComponentFixture<PlayOffsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayOffsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlayOffsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
