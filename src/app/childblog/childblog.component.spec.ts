import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildblogComponent } from './childblog.component';

describe('ChildblogComponent', () => {
  let component: ChildblogComponent;
  let fixture: ComponentFixture<ChildblogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildblogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildblogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
