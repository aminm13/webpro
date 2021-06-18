import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorReviewsComponent } from './tutor-reviews.component';

describe('TutorReviewsComponent', () => {
  let component: TutorReviewsComponent;
  let fixture: ComponentFixture<TutorReviewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TutorReviewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
