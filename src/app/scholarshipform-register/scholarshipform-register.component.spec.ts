import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScholarshipformRegisterComponent } from './scholarshipform-register.component';

describe('ScholarshipformRegisterComponent', () => {
  let component: ScholarshipformRegisterComponent;
  let fixture: ComponentFixture<ScholarshipformRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScholarshipformRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScholarshipformRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
