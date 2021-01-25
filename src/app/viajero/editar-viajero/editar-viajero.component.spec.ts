import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarViajeroComponent } from './editar-viajero.component';

describe('EditarViajeroComponent', () => {
  let component: EditarViajeroComponent;
  let fixture: ComponentFixture<EditarViajeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarViajeroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarViajeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
