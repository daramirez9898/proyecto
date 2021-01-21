import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsociacionAgenciaComponent } from './asociacion-agencia.component';

describe('AsociacionAgenciaComponent', () => {
  let component: AsociacionAgenciaComponent;
  let fixture: ComponentFixture<AsociacionAgenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsociacionAgenciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsociacionAgenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
