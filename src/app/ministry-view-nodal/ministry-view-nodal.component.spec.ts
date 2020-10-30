import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinistryViewNodalComponent } from './ministry-view-nodal.component';

describe('MinistryViewNodalComponent', () => {
  let component: MinistryViewNodalComponent;
  let fixture: ComponentFixture<MinistryViewNodalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinistryViewNodalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinistryViewNodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
