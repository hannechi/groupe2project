import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterPersonnelComponent } from './consulter-personnel.component';

describe('ConsulterPersonnelComponent', () => {
  let component: ConsulterPersonnelComponent;
  let fixture: ComponentFixture<ConsulterPersonnelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsulterPersonnelComponent]
    });
    fixture = TestBed.createComponent(ConsulterPersonnelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
