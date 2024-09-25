import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkoloComponent } from './parkolo.component';

describe('ParkoloComponent', () => {
  let component: ParkoloComponent;
  let fixture: ComponentFixture<ParkoloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParkoloComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParkoloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
