import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarAgenciaComponent } from './editar-agencia.component';

describe('EditarAgenciaComponent', () => {
  let component: EditarAgenciaComponent;
  let fixture: ComponentFixture<EditarAgenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarAgenciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarAgenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
