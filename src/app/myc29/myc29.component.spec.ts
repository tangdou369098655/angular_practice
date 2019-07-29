import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Myc29Component } from './myc29.component';

describe('Myc29Component', () => {
  let component: Myc29Component;
  let fixture: ComponentFixture<Myc29Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Myc29Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Myc29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
