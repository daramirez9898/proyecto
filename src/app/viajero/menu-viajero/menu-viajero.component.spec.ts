import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuViajeroComponent } from './menu-viajero.component';

describe('MenuViajeroComponent', () => {
  let component: MenuViajeroComponent;
  let fixture: ComponentFixture<MenuViajeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuViajeroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuViajeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
