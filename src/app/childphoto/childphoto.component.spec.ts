import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildphotoComponent } from './childphoto.component';

describe('ChildphotoComponent', () => {
  let component: ChildphotoComponent;
  let fixture: ComponentFixture<ChildphotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildphotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildphotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
