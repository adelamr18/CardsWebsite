import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Rlogin2Component } from './rlogin2.component';

describe('Rlogin2Component', () => {
  let component: Rlogin2Component;
  let fixture: ComponentFixture<Rlogin2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Rlogin2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Rlogin2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
