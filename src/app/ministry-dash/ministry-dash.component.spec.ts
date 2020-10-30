import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinistryDashComponent } from './ministry-dash.component';

describe('MinistryDashComponent', () => {
  let component: MinistryDashComponent;
  let fixture: ComponentFixture<MinistryDashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinistryDashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinistryDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
