import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorFilterComponent } from './tutor-filter.component';

describe('TutorFilterComponent', () => {
  let component: TutorFilterComponent;
  let fixture: ComponentFixture<TutorFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TutorFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
