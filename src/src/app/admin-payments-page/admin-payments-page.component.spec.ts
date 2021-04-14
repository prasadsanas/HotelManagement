import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPaymentsPageComponent } from './admin-payments-page.component';

describe('AdminPaymentsPageComponent', () => {
  let component: AdminPaymentsPageComponent;
  let fixture: ComponentFixture<AdminPaymentsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPaymentsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPaymentsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
