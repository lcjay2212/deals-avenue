import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromoApprovalComponent } from './promo-approval.component';

describe('PromoApprovalComponent', () => {
  let component: PromoApprovalComponent;
  let fixture: ComponentFixture<PromoApprovalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromoApprovalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromoApprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
