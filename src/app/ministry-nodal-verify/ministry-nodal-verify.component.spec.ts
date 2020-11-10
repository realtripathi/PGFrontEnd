import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinistryNodalVerifyComponent } from './ministry-nodal-verify.component';

describe('MinistryNodalVerifyComponent', () => {
  let component: MinistryNodalVerifyComponent;
  let fixture: ComponentFixture<MinistryNodalVerifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinistryNodalVerifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinistryNodalVerifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
