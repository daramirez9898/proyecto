import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarPaquetesComponent } from './mostrar-paquetes.component';

describe('MostrarPaquetesComponent', () => {
  let component: MostrarPaquetesComponent;
  let fixture: ComponentFixture<MostrarPaquetesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostrarPaquetesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarPaquetesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
