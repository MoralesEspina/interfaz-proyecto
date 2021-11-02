import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarrComponent } from './modificarr.component';

describe('ModificarrComponent', () => {
  let component: ModificarrComponent;
  let fixture: ComponentFixture<ModificarrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
