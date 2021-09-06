import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesHabitacionComponent } from './detalles-habitacion.component';

describe('DetallesHabitacionComponent', () => {
  let component: DetallesHabitacionComponent;
  let fixture: ComponentFixture<DetallesHabitacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallesHabitacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesHabitacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
