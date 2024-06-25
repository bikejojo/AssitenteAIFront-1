import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgenteDialogComponent } from './agente-dialog.component';

describe('AgenteDialogComponent', () => {
  let component: AgenteDialogComponent;
  let fixture: ComponentFixture<AgenteDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgenteDialogComponent]
    });
    fixture = TestBed.createComponent(AgenteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
