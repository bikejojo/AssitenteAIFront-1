import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoporteDialogComponent } from './soporte-dialog.component';

describe('SoporteDialogComponent', () => {
  let component: SoporteDialogComponent;
  let fixture: ComponentFixture<SoporteDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SoporteDialogComponent]
    });
    fixture = TestBed.createComponent(SoporteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
