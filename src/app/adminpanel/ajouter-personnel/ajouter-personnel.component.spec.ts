import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterPersonnelComponent } from './ajouter-personnel.component';

describe('AjouterPersonnelComponent', () => {
  let component: AjouterPersonnelComponent;
  let fixture: ComponentFixture<AjouterPersonnelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjouterPersonnelComponent]
    });
    fixture = TestBed.createComponent(AjouterPersonnelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
