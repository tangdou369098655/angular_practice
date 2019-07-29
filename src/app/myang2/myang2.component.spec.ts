import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Myang2Component } from './myang2.component';

describe('Myang2Component', () => {
  let component: Myang2Component;
  let fixture: ComponentFixture<Myang2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Myang2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Myang2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
