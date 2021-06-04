import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailablePacksComponent } from './available-packs.component';

describe('AvailablePacksComponent', () => {
  let component: AvailablePacksComponent;
  let fixture: ComponentFixture<AvailablePacksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvailablePacksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailablePacksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
