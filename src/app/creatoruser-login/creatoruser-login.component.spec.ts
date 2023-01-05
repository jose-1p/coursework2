import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatoruserLoginComponent } from './creatoruser-login.component';

describe('CreatoruserLoginComponent', () => {
  let component: CreatoruserLoginComponent;
  let fixture: ComponentFixture<CreatoruserLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatoruserLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatoruserLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
