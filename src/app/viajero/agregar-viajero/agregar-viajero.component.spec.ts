import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarViajeroComponent } from './agregar-viajero.component';

describe('AgregarViajeroComponent', () => {
  let component: AgregarViajeroComponent;
  let fixture: ComponentFixture<AgregarViajeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarViajeroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarViajeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
