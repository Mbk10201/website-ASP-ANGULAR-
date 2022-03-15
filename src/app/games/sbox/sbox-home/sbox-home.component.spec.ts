import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SboxHomeComponent } from './sbox-home.component';

describe('SboxHomeComponent', () => {
  let component: SboxHomeComponent;
  let fixture: ComponentFixture<SboxHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SboxHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SboxHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
