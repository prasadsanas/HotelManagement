import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBookingsPageComponent } from './admin-bookings-page.component';

describe('AdminBookingsPageComponent', () => {
  let component: AdminBookingsPageComponent;
  let fixture: ComponentFixture<AdminBookingsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminBookingsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminBookingsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
