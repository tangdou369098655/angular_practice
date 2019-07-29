import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Myhomework29Component } from './myhomework29.component';

describe('Myhomework29Component', () => {
  let component: Myhomework29Component;
  let fixture: ComponentFixture<Myhomework29Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Myhomework29Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Myhomework29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
