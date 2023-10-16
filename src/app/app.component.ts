import { Component } from '@angular/core';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'components_services';
  imgParent: string = 'https://www.w3schools.com/howto/img_avatar2.png';
  texto: string = '';

  products: Product[] = [ 
    {
      name: 'Product Name',
      image: "./assets/product.png",
      price: 100,
      id: "1"
    },
    {
      name: 'Product Name1',
      image: "./assets/product.png",
      price: 100,
      id: "2"
    },
    {
      name: 'Product Name2',
      image: "./assets/product.png",
      price: 100,
      id: "3"
    }
  ]

  onLoaded(img: string) {
    console.log('img loaded', img);
  }
}
