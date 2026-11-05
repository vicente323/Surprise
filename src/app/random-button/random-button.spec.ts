import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { RandomButtonComponent } from './random-button';

describe('RandomButtonComponent', () => {
  let component: RandomButtonComponent;
  let fixture: ComponentFixture<RandomButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RandomButtonComponent],
      providers: [provideRouter([])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RandomButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should start the random button at the container center', () => {
    const container = fixture.nativeElement.querySelector('.container') as HTMLElement;
    const moving = fixture.nativeElement.querySelector('.moving-button') as HTMLElement;
    const fixed = fixture.nativeElement.querySelector('.static-button') as HTMLElement;
    const containerRect = container.getBoundingClientRect();
    const movingRect = moving.getBoundingClientRect();
    const fixedRect = fixed.getBoundingClientRect();

    expect((movingRect.left + movingRect.right) / 2)
      .toBeCloseTo((containerRect.left + containerRect.right) / 2, 0);
    expect((movingRect.top + movingRect.bottom) / 2)
      .toBeCloseTo((containerRect.top + containerRect.bottom) / 2, 0);
    expect((fixedRect.top + fixedRect.bottom) / 2)
      .toBeCloseTo((containerRect.top + containerRect.bottom) / 2, 0);
  });
});
