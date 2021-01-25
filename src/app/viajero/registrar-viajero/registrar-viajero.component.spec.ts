import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarViajeroComponent } from './registrar-viajero.component';

describe('RegistrarViajeroComponent', () => {
  let component: RegistrarViajeroComponent;
  let fixture: ComponentFixture<RegistrarViajeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarViajeroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarViajeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
