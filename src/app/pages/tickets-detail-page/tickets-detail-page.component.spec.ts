import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketsDetailPageComponent } from './tickets-detail-page.component';

describe('TicketsDetailPageComponent', () => {
  let component: TicketsDetailPageComponent;
  let fixture: ComponentFixture<TicketsDetailPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TicketsDetailPageComponent]
    });
    fixture = TestBed.createComponent(TicketsDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
