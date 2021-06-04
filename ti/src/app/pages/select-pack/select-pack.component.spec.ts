import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectPackComponent } from './select-pack.component';

describe('SelectPackComponent', () => {
  let component: SelectPackComponent;
  let fixture: ComponentFixture<SelectPackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectPackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectPackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
