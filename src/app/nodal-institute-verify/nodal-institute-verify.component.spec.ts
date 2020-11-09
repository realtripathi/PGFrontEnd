import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NodalInstituteVerifyComponent } from './nodal-institute-verify.component';

describe('NodalInstituteVerifyComponent', () => {
  let component: NodalInstituteVerifyComponent;
  let fixture: ComponentFixture<NodalInstituteVerifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NodalInstituteVerifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NodalInstituteVerifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
