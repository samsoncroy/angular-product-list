import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { ProductsCardsComponent } from './products-cards.component';

describe('ProductsCardsComponent', () => {
  let component: ProductsCardsComponent;
  let fixture: ComponentFixture<ProductsCardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductsCardsComponent],
      imports: [CommonModule],
    });

    fixture = TestBed.createComponent(ProductsCardsComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize products array with sample data', () => {
    expect(component.products.length).toBeGreaterThan(0);
  });

  it('should set selectedDescription when showDescription is called', () => {
    const index = 0;
    const expectedDescription = component.products[index].description;

    component.showDescription(index);

    expect(component.selectedDescription).toEqual(expectedDescription);
  });

  it('should update selectedDescription when showDescription is called with a different index', () => {
    const initialIndex = 0;
    const updatedIndex = 1;

    component.showDescription(initialIndex);
    const initialDescription = component.selectedDescription;

    component.showDescription(updatedIndex);

    expect(component.selectedDescription).not.toEqual(initialDescription);
  });
});