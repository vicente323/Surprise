import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sucess } from './sucess';

describe('Sucess', () => {
  let component: Sucess;
  let fixture: ComponentFixture<Sucess>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sucess]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sucess);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
