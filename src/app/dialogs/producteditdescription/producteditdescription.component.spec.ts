import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducteditdescriptionComponent } from './producteditdescription.component';

describe('ProducteditdescriptionComponent', () => {
  let component: ProducteditdescriptionComponent;
  let fixture: ComponentFixture<ProducteditdescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProducteditdescriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProducteditdescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
