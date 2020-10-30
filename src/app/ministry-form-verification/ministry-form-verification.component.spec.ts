import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinistryFormVerificationComponent } from './ministry-form-verification.component';

describe('MinistryFormVerificationComponent', () => {
  let component: MinistryFormVerificationComponent;
  let fixture: ComponentFixture<MinistryFormVerificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinistryFormVerificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinistryFormVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
