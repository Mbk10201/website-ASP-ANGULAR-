import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopconfigComponent } from './shopconfig.component';

describe('ShopconfigComponent', () => {
  let component: ShopconfigComponent;
  let fixture: ComponentFixture<ShopconfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopconfigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopconfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
