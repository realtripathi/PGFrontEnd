import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstituteDashComponent } from './institute-dash.component';

describe('InstituteDashComponent', () => {
  let component: InstituteDashComponent;
  let fixture: ComponentFixture<InstituteDashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstituteDashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstituteDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
