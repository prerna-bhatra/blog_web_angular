import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostallComponent } from './postall.component';

describe('PostallComponent', () => {
  let component: PostallComponent;
  let fixture: ComponentFixture<PostallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
