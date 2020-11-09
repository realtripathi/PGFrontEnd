import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinistryFormVerifyComponent } from './ministry-form-verify.component';

describe('MinistryFormVerifyComponent', () => {
  let component: MinistryFormVerifyComponent;
  let fixture: ComponentFixture<MinistryFormVerifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinistryFormVerifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinistryFormVerifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
