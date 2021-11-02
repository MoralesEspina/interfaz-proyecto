import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeloavionComponent } from './modeloavion.component';

describe('ModeloavionComponent', () => {
  let component: ModeloavionComponent;
  let fixture: ComponentFixture<ModeloavionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModeloavionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModeloavionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
