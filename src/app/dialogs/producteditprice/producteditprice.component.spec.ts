import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducteditpriceComponent } from './producteditprice.component';

describe('ProducteditpriceComponent', () => {
  let component: ProducteditpriceComponent;
  let fixture: ComponentFixture<ProducteditpriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProducteditpriceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProducteditpriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
