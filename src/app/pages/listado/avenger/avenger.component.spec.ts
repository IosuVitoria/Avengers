import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvengerComponent } from './avenger.component';

describe('AvengerComponent', () => {
  let component: AvengerComponent;
  let fixture: ComponentFixture<AvengerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AvengerComponent]
    });
    fixture = TestBed.createComponent(AvengerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
