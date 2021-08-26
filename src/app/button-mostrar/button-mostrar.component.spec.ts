import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonMostrarComponent } from './button-mostrar.component';

describe('ButtonMostrarComponent', () => {
  let component: ButtonMostrarComponent;
  let fixture: ComponentFixture<ButtonMostrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonMostrarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonMostrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
