import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducteditcategoryComponent } from './producteditcategory.component';

describe('ProducteditcategoryComponent', () => {
  let component: ProducteditcategoryComponent;
  let fixture: ComponentFixture<ProducteditcategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProducteditcategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProducteditcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
