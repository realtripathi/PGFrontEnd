import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstituteFormViewComponent } from './institute-form-view.component';

describe('InstituteFormViewComponent', () => {
  let component: InstituteFormViewComponent;
  let fixture: ComponentFixture<InstituteFormViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstituteFormViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstituteFormViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
