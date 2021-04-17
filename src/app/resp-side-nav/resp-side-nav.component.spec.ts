import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RespSideNavComponent } from './resp-side-nav.component';

describe('RespSideNavComponent', () => {
  let component: RespSideNavComponent;
  let fixture: ComponentFixture<RespSideNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RespSideNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RespSideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
