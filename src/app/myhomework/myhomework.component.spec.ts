import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyhomeworkComponent } from './myhomework.component';

describe('MyhomeworkComponent', () => {
  let component: MyhomeworkComponent;
  let fixture: ComponentFixture<MyhomeworkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyhomeworkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyhomeworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
