import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartdownloadComponent } from './startdownload.component';

describe('StartdownloadComponent', () => {
  let component: StartdownloadComponent;
  let fixture: ComponentFixture<StartdownloadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartdownloadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartdownloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
