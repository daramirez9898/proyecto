import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarAsociacionComponent } from './agregar-asociacion.component';

describe('AgregarAsociacionComponent', () => {
  let component: AgregarAsociacionComponent;
  let fixture: ComponentFixture<AgregarAsociacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarAsociacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarAsociacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
