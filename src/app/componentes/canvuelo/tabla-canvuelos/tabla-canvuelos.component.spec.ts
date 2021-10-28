import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaCanvuelosComponent } from './tabla-canvuelos.component';

describe('TablaCanvuelosComponent', () => {
  let component: TablaCanvuelosComponent;
  let fixture: ComponentFixture<TablaCanvuelosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaCanvuelosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaCanvuelosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
