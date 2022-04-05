import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigaitonBarComponent } from './navigaiton-bar.component';

describe('NavigaitonBarComponent', () => {
  let component: NavigaitonBarComponent;
  let fixture: ComponentFixture<NavigaitonBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavigaitonBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigaitonBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
