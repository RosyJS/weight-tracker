import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DietItemListComponent } from './diet-item-list.component';

describe('DietItemListComponent', () => {
  let component: DietItemListComponent;
  let fixture: ComponentFixture<DietItemListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DietItemListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DietItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
