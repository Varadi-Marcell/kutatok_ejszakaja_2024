import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElocsarnokSvgComponent } from './elocsarnok-svg.component';

describe('ElocsarnokSvgComponent', () => {
  let component: ElocsarnokSvgComponent;
  let fixture: ComponentFixture<ElocsarnokSvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElocsarnokSvgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElocsarnokSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
