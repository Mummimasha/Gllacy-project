import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import {ProductCardsService, productItem,} from '../../services/product-cards.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent implements OnInit {
  @Input() productList: productItem[] = [];
  @Output() test: EventEmitter<any> = new EventEmitter();
  notFound: boolean = false;
  product: productItem = {
    id: 0,
    productTitle: '',
    productDescription: '',
    productPrice: 0,
    productImg: '',
    category: [],
    fat: 0,
    filter: '',
    popularity: 0
  };

  cartProductsList: productItem[] = [];
 

  constructor(private productCardsService: ProductCardsService) {}

  ngOnInit(): void {
    

  }
  
  ngOnChanges() :void {
    if(this.productList.length === 0) {
      this.notFound = true;
    } else {
      this.notFound = false;
    };
    console.log(this.productList)
  }
   
 /* addToCart(product: productItem) :void{
    this.cartProductsList.push(product);
    console.log(this.cartProductsList);
    this.productCardsService.setCartProducts(this.cartProductsList);
  } */
 }