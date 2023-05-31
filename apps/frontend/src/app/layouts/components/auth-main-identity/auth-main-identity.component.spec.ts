import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthMainIdentityComponent } from './auth-main-identity.component';

describe('AuthMainIdentityComponent', () => {
  let component: AuthMainIdentityComponent;
  let fixture: ComponentFixture<AuthMainIdentityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuthMainIdentityComponent]
    });
    fixture = TestBed.createComponent(AuthMainIdentityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
