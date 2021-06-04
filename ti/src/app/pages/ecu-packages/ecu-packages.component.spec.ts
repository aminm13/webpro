import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcuPackagesComponent } from './ecu-packages.component';

describe('EcuPackagesComponent', () => {
  let component: EcuPackagesComponent;
  let fixture: ComponentFixture<EcuPackagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EcuPackagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EcuPackagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
