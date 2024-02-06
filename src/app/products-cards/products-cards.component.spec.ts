import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { ProductsCardsComponent } from './products-cards.component';

describe('ProductsCardsComponent', () => {
  let component: ProductsCardsComponent;
  let fixture: ComponentFixture<ProductsCardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ProductsCardsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsCardsComponent);
    component = fixture.componentInstance;
    component.products = [
      {
        id: 1,
        name: 'Product Name',
        brand: 'Brand Name',
        imageUrl: 'http://example.com/product.jpg',
        price:  100.00,
        description: 'First product description',
      },
      {
        id: 2,
        name: 'Another Product',
        brand: 'Other Brand',
        imageUrl: 'http://example.com/another-product.jpg',
        price:  200.00,
        description: 'Second product description',
      },
    ];
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize products array with sample data', () => {
    expect(component.products.length).toBeGreaterThan(0);
  });

  it('should set selectedDescription when showDescription is called', () => {
    const index =  0;
    if (component.products && component.products[index]) {
      const expectedDescription = component.products[index].description;
      component.showDescription(index);
      expect(component.selectedDescription).toEqual(expectedDescription);
    } else {
      fail('Product at index does not exist');
    }
  });

  it('should update selectedDescription when showDescription is called with a different index', () => {
    const initialIndex =  0;
    const updatedIndex =  1;
    if (component.products && component.products[initialIndex] && component.products[updatedIndex]) {
      component.showDescription(initialIndex);
      const initialDescription = component.selectedDescription;
      component.showDescription(updatedIndex);
      expect(component.selectedDescription).not.toEqual(initialDescription);
    } else {
      fail('One or both products at indices do not exist');
    }
  });
});