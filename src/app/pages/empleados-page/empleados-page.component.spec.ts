import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadosPageComponent } from './empleados-page.component';

describe('EmpleadosPageComponent', () => {
  let component: EmpleadosPageComponent;
  let fixture: ComponentFixture<EmpleadosPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmpleadosPageComponent]
    });
    fixture = TestBed.createComponent(EmpleadosPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
