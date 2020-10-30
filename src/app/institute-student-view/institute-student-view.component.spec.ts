import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstituteStudentViewComponent } from './institute-student-view.component';

describe('InstituteStudentViewComponent', () => {
  let component: InstituteStudentViewComponent;
  let fixture: ComponentFixture<InstituteStudentViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstituteStudentViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstituteStudentViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
