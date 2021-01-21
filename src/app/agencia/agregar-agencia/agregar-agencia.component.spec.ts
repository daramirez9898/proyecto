import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarAgenciaComponent } from './agregar-agencia.component';

describe('AgregarAgenciaComponent', () => {
  let component: AgregarAgenciaComponent;
  let fixture: ComponentFixture<AgregarAgenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarAgenciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarAgenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
