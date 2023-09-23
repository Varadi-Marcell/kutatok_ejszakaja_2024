import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AulaSvgComponent } from './aula-svg.component';

describe('AulaSvgComponent', () => {
  let component: AulaSvgComponent;
  let fixture: ComponentFixture<AulaSvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AulaSvgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AulaSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
