import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthMainFooterComponent } from './auth-main-footer.component';

describe('AuthMainFooterComponent', () => {
  let component: AuthMainFooterComponent;
  let fixture: ComponentFixture<AuthMainFooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuthMainFooterComponent]
    });
    fixture = TestBed.createComponent(AuthMainFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
