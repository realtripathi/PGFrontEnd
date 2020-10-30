import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NodalDashComponent } from './nodal-dash.component';

describe('NodalDashComponent', () => {
  let component: NodalDashComponent;
  let fixture: ComponentFixture<NodalDashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NodalDashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NodalDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
