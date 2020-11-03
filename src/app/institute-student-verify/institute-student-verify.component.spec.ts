import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstituteStudentVerifyComponent } from './institute-student-verify.component';

describe('InstituteStudentVerifyComponent', () => {
  let component: InstituteStudentVerifyComponent;
  let fixture: ComponentFixture<InstituteStudentVerifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstituteStudentVerifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstituteStudentVerifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
