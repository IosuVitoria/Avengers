import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoVengadorComponent } from './nuevo-vengador.component';

describe('NuevoVengadorComponent', () => {
  let component: NuevoVengadorComponent;
  let fixture: ComponentFixture<NuevoVengadorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NuevoVengadorComponent]
    });
    fixture = TestBed.createComponent(NuevoVengadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
