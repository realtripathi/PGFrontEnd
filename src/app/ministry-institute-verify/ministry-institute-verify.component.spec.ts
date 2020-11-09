import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinistryInstituteVerifyComponent } from './ministry-institute-verify.component';

describe('MinistryInstituteVerifyComponent', () => {
  let component: MinistryInstituteVerifyComponent;
  let fixture: ComponentFixture<MinistryInstituteVerifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinistryInstituteVerifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinistryInstituteVerifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
