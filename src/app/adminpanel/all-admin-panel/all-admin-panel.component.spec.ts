import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllAdminPanelComponent } from './all-admin-panel.component';

describe('AllAdminPanelComponent', () => {
  let component: AllAdminPanelComponent;
  let fixture: ComponentFixture<AllAdminPanelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllAdminPanelComponent]
    });
    fixture = TestBed.createComponent(AllAdminPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
