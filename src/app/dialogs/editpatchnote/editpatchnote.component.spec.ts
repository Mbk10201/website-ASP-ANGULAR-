import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditpatchnoteComponent } from './editpatchnote.component';

describe('EditpatchnoteComponent', () => {
  let component: EditpatchnoteComponent;
  let fixture: ComponentFixture<EditpatchnoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditpatchnoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditpatchnoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
