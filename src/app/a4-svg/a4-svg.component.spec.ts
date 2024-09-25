import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A4SvgComponent } from './a4-svg.component';

describe('A4SvgComponent', () => {
  let component: A4SvgComponent;
  let fixture: ComponentFixture<A4SvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ A4SvgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(A4SvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
