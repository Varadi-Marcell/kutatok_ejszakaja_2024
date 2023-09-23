import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexSvgComponent } from './index-svg.component';

describe('IndexSvgComponent', () => {
  let component: IndexSvgComponent;
  let fixture: ComponentFixture<IndexSvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexSvgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
