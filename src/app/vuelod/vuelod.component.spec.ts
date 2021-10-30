import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VuelodComponent } from './vuelod.component';

describe('VuelodComponent', () => {
  let component: VuelodComponent;
  let fixture: ComponentFixture<VuelodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VuelodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VuelodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
