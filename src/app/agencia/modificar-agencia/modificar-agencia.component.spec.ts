import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarAgenciaComponent } from './modificar-agencia.component';

describe('ModificarAgenciaComponent', () => {
  let component: ModificarAgenciaComponent;
  let fixture: ComponentFixture<ModificarAgenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarAgenciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarAgenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
