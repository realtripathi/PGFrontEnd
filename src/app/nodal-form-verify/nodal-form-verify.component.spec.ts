import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NodalFormVerifyComponent } from './nodal-form-verify.component';

describe('NodalFormVerifyComponent', () => {
  let component: NodalFormVerifyComponent;
  let fixture: ComponentFixture<NodalFormVerifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NodalFormVerifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NodalFormVerifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
