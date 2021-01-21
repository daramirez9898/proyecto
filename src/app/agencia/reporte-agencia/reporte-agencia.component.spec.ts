import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteAgenciaComponent } from './reporte-agencia.component';

describe('ReporteAgenciaComponent', () => {
  let component: ReporteAgenciaComponent;
  let fixture: ComponentFixture<ReporteAgenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReporteAgenciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporteAgenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
