import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NodalRegisterComponent } from './nodal-register.component';

describe('NodalRegisterComponent', () => {
  let component: NodalRegisterComponent;
  let fixture: ComponentFixture<NodalRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NodalRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NodalRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
