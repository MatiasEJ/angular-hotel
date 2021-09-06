import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearHabitacionesComponent } from './crear-habitaciones.component';

describe('CrearHabitacionesComponent', () => {
  let component: CrearHabitacionesComponent;
  let fixture: ComponentFixture<CrearHabitacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearHabitacionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearHabitacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
