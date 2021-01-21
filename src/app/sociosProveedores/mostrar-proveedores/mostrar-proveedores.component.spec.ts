import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarProveedoresComponent } from './mostrar-proveedores.component';

describe('MostrarProveedoresComponent', () => {
  let component: MostrarProveedoresComponent;
  let fixture: ComponentFixture<MostrarProveedoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostrarProveedoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarProveedoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
