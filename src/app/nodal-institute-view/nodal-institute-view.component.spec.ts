import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NodalInstituteViewComponent } from './nodal-institute-view.component';

describe('NodalInstituteViewComponent', () => {
  let component: NodalInstituteViewComponent;
  let fixture: ComponentFixture<NodalInstituteViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NodalInstituteViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NodalInstituteViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
