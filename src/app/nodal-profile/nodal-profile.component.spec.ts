import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NodalProfileComponent } from './nodal-profile.component';

describe('NodalProfileComponent', () => {
  let component: NodalProfileComponent;
  let fixture: ComponentFixture<NodalProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NodalProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NodalProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
