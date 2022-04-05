import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DietTrackerPageComponent } from './diet-tracker-page.component';

describe('DietTrackerPageComponent', () => {
  let component: DietTrackerPageComponent;
  let fixture: ComponentFixture<DietTrackerPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DietTrackerPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DietTrackerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
