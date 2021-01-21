import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarAsociacionAgenciaComponent } from './agregar-asociacion-agencia.component';

describe('AgregarAsociacionAgenciaComponent', () => {
  let component: AgregarAsociacionAgenciaComponent;
  let fixture: ComponentFixture<AgregarAsociacionAgenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarAsociacionAgenciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarAsociacionAgenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
