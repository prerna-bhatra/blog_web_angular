import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbaarComponent } from './navbaar.component';

describe('NavbaarComponent', () => {
  let component: NavbaarComponent;
  let fixture: ComponentFixture<NavbaarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbaarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbaarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
