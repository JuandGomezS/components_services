import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit{

  constructor() { }

  @Input() product: Product = {
    name: '',
    image: '',
    price: 0,
    id: ''
  }

  ngOnInit(): void {
  }

}
