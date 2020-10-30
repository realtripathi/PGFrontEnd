import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NodalFormViewComponent } from './nodal-form-view.component';

describe('NodalFormViewComponent', () => {
  let component: NodalFormViewComponent;
  let fixture: ComponentFixture<NodalFormViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NodalFormViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NodalFormViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
