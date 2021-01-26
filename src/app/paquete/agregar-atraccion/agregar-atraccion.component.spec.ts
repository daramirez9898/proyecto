import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarAtraccionComponent } from './agregar-atraccion.component';

describe('AgregarAtraccionComponent', () => {
  let component: AgregarAtraccionComponent;
  let fixture: ComponentFixture<AgregarAtraccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarAtraccionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarAtraccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
