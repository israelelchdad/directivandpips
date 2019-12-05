import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirctivsComponent } from './dirctivs.component';

describe('DirctivsComponent', () => {
  let component: DirctivsComponent;
  let fixture: ComponentFixture<DirctivsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirctivsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirctivsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
