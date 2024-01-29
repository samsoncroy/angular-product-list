import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';


interface productDetails{
  id:number,
  name:string,
  description:string,
  brand:string,
  imageUrl:string,
  price:number
}
@Component({
  selector: 'app-products-cards',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products-cards.component.html',
  styleUrl: './products-cards.component.css'
})
export class ProductsCardsComponent implements OnInit{
  public selectedDescription?: string;
  public products:productDetails[] = [];

  public ngOnInit(): void {
    // <-- Products -->
    this.products = [
      {
        id: 1,
        name: 'AIR FORCE 1 \'07 LV8',
        description: 'The radiance lives on in the Nike Air Force 1 \'07, the b-ball OG that puts a fresh spin on what you know best: durably stitched overlays, clean finishes and the perfect amount of flash to make you shine.',
        brand: 'NIKE',
        imageUrl: 'https://images.vegnonveg.com/resized/700X573/10270/air-force-1-07-lv8-embroidered-hempcoconut-milk-baroque-brown-sesame-brown-653b28126c0ac.jpg',
        price: 129.99
      },
      {
        id: 2,
        name: 'FORUM 84 LOW',
        description: 'LOW-CUT FORUM SHOES THAT CELEBRATE THE HERITAGE OF THEIR STYLE. Celebrating 40 years of the adidas Forum shoes.',
        brand: 'ADIDAS ORIGINALS',
        imageUrl: 'https://images.vegnonveg.com/resized/700X573/10496/forum-84-low-cloud-whiteputty-greybetter-scarlet-grey-6572f999011f5.jpg',
        price: 134.99
      },
      {
        id: 3,
        name: 'AIR FORCE 1 \'07 WB',
        description: 'The radiance lives on in the Nike Air <br>Force 1 \'07, the b-ball icon that puts a <br>fresh spin on what you know best: crisp <br>leather, bold colours and the perfect <br>amount of flash to make you shine.',
        brand: 'NIKE',
        imageUrl: 'https://images.vegnonveg.com/resized/700X573/9893/air-force-1-07-wb-lt-iron-orelt-iron-ore-lt-orewood-brn-64faf6f65c656.jpg',
        price: 119.99
      },
      {
        id: 4,
        name: 'AIR JORDAN 1 MID SE',
        description: 'You know they\'re crisp, clean and cutting but how are you gonna pair these AJ1s? They\'re made of leather and textiles in the upper and have that cushioned comfort Nike Air in the sole.',
        brand: 'JORDAN',
        imageUrl: 'https://images.vegnonveg.com/resized/700X573/10587/air-jordan-1-mid-se-whitelobster-dune-red-sail-red-659ced63b72ff.jpg',
        price: 129.99
      },
      {
        id: 5,
        name: 'FORUM LOW CL',
        description: 'LOW-PROFILE SHOES INSPIRED BY CLASSIC COLLEGIATE STYLE. Slip into classic cool with these adidas shoes. Tried-and-true Forum style brings a mix of vintage vibes and modern minimalism.',
        brand: 'ADIDAS ORIGINALS',
        imageUrl: 'https://images.vegnonveg.com/resized/700X573/10536/forum-low-cl-cloud-whitewonder-bluesupplier-color-white-658aa90e0bb30.jpg',
        price: 124.99
      }
    ];
  }
  public showDescription(index:number):string{
    const selectedProduct = this.products[index];
    this.selectedDescription =  selectedProduct.description;
    return this.selectedDescription;
  } 
}
