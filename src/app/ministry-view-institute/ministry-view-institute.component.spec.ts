import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinistryViewInstituteComponent } from './ministry-view-institute.component';

describe('MinistryViewInstituteComponent', () => {
  let component: MinistryViewInstituteComponent;
  let fixture: ComponentFixture<MinistryViewInstituteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinistryViewInstituteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinistryViewInstituteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
