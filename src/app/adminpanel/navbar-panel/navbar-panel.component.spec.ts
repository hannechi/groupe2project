import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarPanelComponent } from './navbar-panel.component';

describe('NavbarPanelComponent', () => {
  let component: NavbarPanelComponent;
  let fixture: ComponentFixture<NavbarPanelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarPanelComponent]
    });
    fixture = TestBed.createComponent(NavbarPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
