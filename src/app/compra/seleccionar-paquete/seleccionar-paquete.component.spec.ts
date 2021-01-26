import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeleccionarPaqueteComponent } from './seleccionar-paquete.component';

describe('SeleccionarPaqueteComponent', () => {
  let component: SeleccionarPaqueteComponent;
  let fixture: ComponentFixture<SeleccionarPaqueteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeleccionarPaqueteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeleccionarPaqueteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
