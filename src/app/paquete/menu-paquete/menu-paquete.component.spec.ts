import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuPaqueteComponent } from './menu-paquete.component';

describe('MenuPaqueteComponent', () => {
  let component: MenuPaqueteComponent;
  let fixture: ComponentFixture<MenuPaqueteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuPaqueteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuPaqueteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
