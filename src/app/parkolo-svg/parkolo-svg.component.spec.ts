import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkoloSvgComponent } from './parkolo-svg.component';

describe('ParkoloSvgComponent', () => {
  let component: ParkoloSvgComponent;
  let fixture: ComponentFixture<ParkoloSvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParkoloSvgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParkoloSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
