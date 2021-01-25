import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarViajeroComponent } from './modificar-viajero.component';

describe('ModificarViajeroComponent', () => {
  let component: ModificarViajeroComponent;
  let fixture: ComponentFixture<ModificarViajeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarViajeroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarViajeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
