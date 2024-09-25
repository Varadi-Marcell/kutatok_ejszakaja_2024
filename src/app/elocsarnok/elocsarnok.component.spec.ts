import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElocsarnokComponent } from './elocsarnok.component';

describe('ElocsarnokComponent', () => {
  let component: ElocsarnokComponent;
  let fixture: ComponentFixture<ElocsarnokComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElocsarnokComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElocsarnokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
