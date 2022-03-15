import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducteditimageComponent } from './producteditimage.component';

describe('ProducteditimageComponent', () => {
  let component: ProducteditimageComponent;
  let fixture: ComponentFixture<ProducteditimageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProducteditimageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProducteditimageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
