import { Component, OnInit } from '@angular/core';
import { ProductCardsService, productItem } from '../services/product-cards.service';

@Component({
  selector: 'app-popular-products',
  templateUrl: './popular-products.component.html',
  styleUrls: ['./popular-products.component.css']
})
export class PopularProductsComponent implements OnInit {
  popularProductsList: productItem[] = [];
  product:productItem = {
    id: 0,
    productTitle: '',
    productDescription: '',
    productPrice: 0,
    productImg: '',
    category: [],
    fat: 0,
    filter: '',
    popularity: 0
  }

  constructor(private productsService: ProductCardsService) { }

  ngOnInit(): void {
    this.getPopularProducts();
  
  }
  
  getPopularProducts(): void {
    this.popularProductsList = this.productsService.getPopularProducts();
    console.log(this.popularProductsList);
  }
 
  // private sortPopularProducts() {
  //   this.getProducts();
  //   this.popularProductsList.sort((a, b) => b.popularity - a.popularity);
  //   this.popularProductsList.length = 4;
  //   console.log(this.popularProductsList);
  // }

}
