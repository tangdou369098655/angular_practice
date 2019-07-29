import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Myang3Component } from './myang3.component';

describe('Myang3Component', () => {
  let component: Myang3Component;
  let fixture: ComponentFixture<Myang3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Myang3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Myang3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
