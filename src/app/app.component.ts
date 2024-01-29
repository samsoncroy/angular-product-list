import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductsCardsComponent } from './products-cards/products-cards.component';
import { NumberOnlyDirective } from './number-only.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ProductsCardsComponent,NumberOnlyDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'home-app-angular';
}
