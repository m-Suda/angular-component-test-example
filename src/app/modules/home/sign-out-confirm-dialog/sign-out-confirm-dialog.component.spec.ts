import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignOutConfirmDialogComponent } from './sign-out-confirm-dialog.component';

describe('SignOutConfirmDialogComponent', () => {
  let component: SignOutConfirmDialogComponent;
  let fixture: ComponentFixture<SignOutConfirmDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignOutConfirmDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignOutConfirmDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
