import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MySvgComponent } from './my-svg.component';

describe('MySvgComponent', () => {
  let component: MySvgComponent;
  let fixture: ComponentFixture<MySvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MySvgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MySvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
