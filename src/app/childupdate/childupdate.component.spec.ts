import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildupdateComponent } from './childupdate.component';

describe('ChildupdateComponent', () => {
  let component: ChildupdateComponent;
  let fixture: ComponentFixture<ChildupdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildupdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
