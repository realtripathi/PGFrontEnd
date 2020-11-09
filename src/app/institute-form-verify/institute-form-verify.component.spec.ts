import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstituteFormVerifyComponent } from './institute-form-verify.component';

describe('InstituteFormVerifyComponent', () => {
  let component: InstituteFormVerifyComponent;
  let fixture: ComponentFixture<InstituteFormVerifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstituteFormVerifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstituteFormVerifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
