import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducteditnameComponent } from './producteditname.component';

describe('ProducteditnameComponent', () => {
  let component: ProducteditnameComponent;
  let fixture: ComponentFixture<ProducteditnameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProducteditnameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProducteditnameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
