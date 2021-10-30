import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarPasajerosTablaComponent } from './mostrar-pasajeros-tabla.component';

describe('MostrarPasajerosTablaComponent', () => {
  let component: MostrarPasajerosTablaComponent;
  let fixture: ComponentFixture<MostrarPasajerosTablaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostrarPasajerosTablaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarPasajerosTablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
