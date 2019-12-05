import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PipsimComponent } from './pipsim.component';

describe('PipsimComponent', () => {
  let component: PipsimComponent;
  let fixture: ComponentFixture<PipsimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PipsimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipsimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
