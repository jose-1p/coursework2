import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileuploadnewComponent } from './fileuploadnew.component';

describe('FileuploadnewComponent', () => {
  let component: FileuploadnewComponent;
  let fixture: ComponentFixture<FileuploadnewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FileuploadnewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FileuploadnewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
