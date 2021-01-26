import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarPaqueteComponent } from './mostrar-paquete.component';

describe('MostrarPaqueteComponent', () => {
  let component: MostrarPaqueteComponent;
  let fixture: ComponentFixture<MostrarPaqueteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostrarPaqueteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarPaqueteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
