import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatoruserRegComponent } from './creatoruser-reg.component';

describe('CreatoruserRegComponent', () => {
  let component: CreatoruserRegComponent;
  let fixture: ComponentFixture<CreatoruserRegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatoruserRegComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatoruserRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
