import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentSchemeapplyComponent } from './student-schemeapply.component';

describe('StudentSchemeapplyComponent', () => {
  let component: StudentSchemeapplyComponent;
  let fixture: ComponentFixture<StudentSchemeapplyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentSchemeapplyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentSchemeapplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
