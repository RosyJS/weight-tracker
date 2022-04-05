import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeightItemListComponent } from './weight-item-list.component';

describe('WeightItemListComponent', () => {
  let component: WeightItemListComponent;
  let fixture: ComponentFixture<WeightItemListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeightItemListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeightItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
