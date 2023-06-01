import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntPostComponent } from './int-post.component';

describe('IntPostComponent', () => {
  let component: IntPostComponent;
  let fixture: ComponentFixture<IntPostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IntPostComponent]
    });
    fixture = TestBed.createComponent(IntPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
