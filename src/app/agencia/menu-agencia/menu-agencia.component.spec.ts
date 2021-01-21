import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuAgenciaComponent } from './menu-agencia.component';

describe('MenuAgenciaComponent', () => {
  let component: MenuAgenciaComponent;
  let fixture: ComponentFixture<MenuAgenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuAgenciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuAgenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
