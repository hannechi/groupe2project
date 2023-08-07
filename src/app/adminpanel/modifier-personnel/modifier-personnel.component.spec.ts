import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierPersonnelComponent } from './modifier-personnel.component';

describe('ModifierPersonnelComponent', () => {
  let component: ModifierPersonnelComponent;
  let fixture: ComponentFixture<ModifierPersonnelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModifierPersonnelComponent]
    });
    fixture = TestBed.createComponent(ModifierPersonnelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
